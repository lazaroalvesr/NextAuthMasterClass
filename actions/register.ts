'use server'

import bcrypt from 'bcryptjs'
import { RegisterSchema } from '@/schemas'
import * as z from 'zod'
import { db } from '@/lib/db'
import { getUserByEmail } from '@/data/user'
import { generateVerificationToken } from '@/lib/tokens'
import { sendVerificationEmail } from '@/lib/mail'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFiled = RegisterSchema.safeParse(values)

    if (!validatedFiled.success) {
        return { error: 'Invalid fields' }
    }

    const { email, password, name } = validatedFiled.data
    const hashPassword = await bcrypt.hash(password, 10)

    const existinUser = await getUserByEmail(email)

    if (existinUser) {
        return { error: 'Email already in use!' }
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashPassword
        }
    })

    const verificationToken = await generateVerificationToken(email)

    await sendVerificationEmail(verificationToken.email, verificationToken.token)

    return { sucess: "Confirmation email sent!" }
}
