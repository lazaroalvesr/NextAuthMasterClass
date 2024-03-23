import bcrypt from 'bcryptjs'
import Credentials from 'next-auth/providers/credentials'
import type { NextAuthConfig } from "next-auth";
import { LoginShchema } from './schemas';
import { getUserByEmail } from './data/user';
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export default {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            async authorize(credentials) {
                const validatedFiled = LoginShchema.safeParse(credentials)

                if (validatedFiled.success) {
                    const { email, password } = validatedFiled.data

                    const user = await getUserByEmail(email)
                    if (!user || !user.password) return null

                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password,
                    )

                    if (passwordMatch) return user
                }

                return null
            }
        })
    ],
} satisfies NextAuthConfig