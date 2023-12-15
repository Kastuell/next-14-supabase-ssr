"use server"

import readUserSession from "@/lib/actions"
import { CircleUser, Link, LogOut } from "lucide-react"

export default async function ProfileIcon() {
    const { data } = await readUserSession()

    return (
        <Link href=''>
            {data.session ? <LogOut /> : <CircleUser />}
        </Link>
    )
}