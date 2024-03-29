import readUserSession, { readUser } from "@/lib/actions"
import Link from "next/link"
import { redirect } from "next/navigation"
import SignOut from "./adminpanel/components/SignOut"

export default async function Profile() {
    const { data } = await readUserSession()
    const name = await readUser()
    if (!data.session) {
        return redirect("/auth-server-action")
    }
    console.log(data.session.user.email)
    return (
        <div className="p-16">
            <div className="p-8 bg-white shadow mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                        <div>
                            <p className="font-bold text-gray-700 text-xl">0</p>
                            <p className="text-gray-400">Заказы</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">0</p>
                            <p className="text-gray-400">Оценки</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">0</p>
                            <p className="text-gray-400">Бонусы</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    {
                        data.session.user.email?.includes('admin') ?
                        <Link href='profile/adminpanel'>
                            Панель админа
                        </Link> : null
                    }


                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                        <button
                            className="text-white basis-[33%] py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >
                            предыдущие заказы
                        </button>
                        <SignOut />
                        <button
                            className="text-white basis-[33%] py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >
                            Сообщения тех. поодержки
                        </button>
                    </div>
                </div>

                <div className="mt-20 text-center pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">{data.session.user.email}</h1>
                </div>
            </div>
        </div>
    )
}