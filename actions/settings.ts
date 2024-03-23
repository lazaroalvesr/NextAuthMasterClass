'use server'

import * as z from 'zod'
import { db } from '@/lib/db'
import { unstable_update } from "@/auth"
import { SettingsSchema } from '@/schemas'
import { getUserByEmail, getUserById } from '@/data/user'
import { currentUser } from '@/lib/auth'
import { generateVerificationToken } from '@/lib/tokens'
import { sendVerificationEmail } from '@/lib/mail'
import bcrypt from 'bcryptjs'

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
    const user = await currentUser()

    if (!user) {
        return { error: "Unauthorized" }
    }

    const dbUser = await getUserById(user.id)

    if (!dbUser) {
        return { error: "Unauthorized" }
    }

    if (user.isOAuth) {
        values.email = undefined
        values.password = undefined
        values.newPassword = undefined
        values.isTwoFactorEnabled = undefined
    }

    if (values.email && values.email !== user.email) {
        const existingUser = await getUserByEmail(values.email)
        if (existingUser && existingUser.id !== user.id) {
            return { error: "Email already in use!" }
        }

        const verificatiionToken = await generateVerificationToken(values.email)

        await sendVerificationEmail(
            verificatiionToken.email,
            verificatiionToken.token
        )

        return { sucess: "Verification email sent!" }
    }

    if (values.password && values.newPassword && dbUser.password) {
        const passwordMatch = await bcrypt.compare(
            values.password,
            dbUser.password
        )

        if (!passwordMatch) {
            return { error: "Incorret password!" }
        }

        const hashedPassword = await bcrypt.hash(
            values.password, 10
        )

        values.password = hashedPassword
        values.newPassword = undefined
    }


    const updatedUser = await db.user.update({
        where: { id: dbUser.id },
        data: {
            ...values
        }
    })

    return { sucess: "Settings updated!" }
}