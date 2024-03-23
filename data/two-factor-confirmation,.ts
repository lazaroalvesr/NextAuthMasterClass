import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (
    userId: string
) => {
    try {
        const twpFactprConfirmation = await db.twhoFactorConfirmation.findUnique({
            where: { userId }
        })

        return twpFactprConfirmation
    } catch {
        return null
    }
}