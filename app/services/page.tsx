import { ChevronRight, Stethoscope } from "lucide-react"
import Link from "next/link"


export default async function Servicec() {
    // const res = await fetch('my-json-server.typicode.com/Kastuell/next-14-supabase-ssr/services')
    // const services = await res.json()
    
    const ServiceList = [
        { id: '1', name: 'Магнитно-Резонансная Томография', img: '../files/cmho.png', path: '/mrt', description: '123' },
        { id: '2', name: 'Компьютерная Томография', img: '../files/cmho.png', path: '/kt' },
        { id: '3', name: 'УЗИ', img: '../files/cmho.png', path: '/uzi' },
        { id: '4', name: 'Лаборатория (Анализы)', img: '../files/cmho.png', path: '/lab' },
        { id: '5', name: 'Маммография', img: '../files/cmho.png', path: '/mamo' },
        { id: '6', name: 'Центр Женского здоровья', img: '../files/cmho.png', path: '/czz' },
        { id: '7', name: 'Центр Мужского здоровья', img: '../files/cmho.png', path: '/cmz' },
        { id: '8', name: 'Программы Комплексного обследования', img: '../files/cmho.png', path: '/pko' },
        { id: '9', name: 'Поликлинические врачи', img: '../files/cmho.png', path: '/pv' },
        { id: '10', name: 'Рентген', img: '../files/cmho.png', path: '/rentgen' },
        { id: '11', name: 'Центр лечения молочных желез', img: '../files/cmho.png', path: '/clmz' },
        { id: '12', name: 'Отделение реабилитации и восстановления', img: '../files/cmho.png', path: '/reab' },
        { id: '13', name: 'Медицинская  Комиссия', img: '../files/cmho.png', path: '/medkom' },
        { id: '14', name: 'Отделение Хирургии  и травматологии', img: '../files/cmho.png', path: '/hirurg' },
        { id: '15', name: 'Отделение дерматовенерологии', img: '../files/cmho.png', path: '/dermo' },
        { id: '16', name: 'Отделение колопроктологии', img: '../files/cmho.png', path: '/kolo' },
        { id: '17', name: 'Терапевтическое отделение', img: '../files/cmho.png', path: '/terap' },


    ]

    return (
        <div className="container">
            <div>
                <h1 className=" text-4xl">Наши Услуги</h1>
                <div className="mt-10 grid grid-cols-3 gap-4 lg:grid-cols-2 md:grid-cols-1">
                    {ServiceList.map((service:any) => (
                        <Link href={`services${service.path}`}>
                            <div className="grid grid-cols-[1fr_3fr_1fr] rounded-3xl items-center p-5 border min-h-[100px] lg:min-h-[130px]">
                                <div><Stethoscope size={32} /></div>
                                <div>{service.name}</div>
                                <div><ChevronRight className=" hover:text-maincolor" /></div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div >
    )
}
