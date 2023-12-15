'use client'
 
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function Service() {
    const ServiceList = [
        { id: '1', name: 'Магнитно-Резонансная Томография', img: '../files/cmho.png', path: '/mrt', description: 'В медицинском центре Инвентум выполняются более 40 видов исследований различных органов и суставов: начиная от МРТ головного мозга и заканчивая исследованием брюшной полости. Отделение оснащено двумя новейшими магнитно-резонансными томографами открытого и закрытого типа. Все исследования проходят под контролем ведущих врачей-рентгенологов, регулярно повышающих свой профессиональный уровень.' },
        { id: '2', name: 'Компьютерная Томография', img: '../files/cmho.png', path: '/kt', description: 'В медицинском центре Инвентум выполняются более 50 видов исследований различных органов и суставов: начиная от компьютерной томографии грудной клетки и заканчивая проведением виртуальной колоноскопии. Отделение оснащено новейшим 160-срезовым компьютерным томографом, единственным на Дальнем Востоке. Все исследования проходят под контролем ведущих врачей-рентгенологов, регулярно повышающих свой профессиональный уровень.' },
        { id: '3', name: 'УЗИ', img: '../files/cmho.png', path: '/uzi', description: 'В медицинском центре Инвентум выполняются более 50 видов исследований различных органов и суставов: начиная от компьютерной томографии грудной клетки и заканчивая проведением виртуальной колоноскопии. Отделение оснащено новейшим 160-срезовым компьютерным томографом, единственным на Дальнем Востоке. Все исследования проходят под контролем ведущих врачей-рентгенологов, регулярно повышающих свой профессиональный уровень.' },
        { id: '4', name: 'Лаборатория (Анализы)', img: '../files/cmho.png', path: '/lab', description: 'В медицинском центре Инвентум выполняются более 50 видов исследований различных органов и суставов: начиная от компьютерной томографии грудной клетки и заканчивая проведением виртуальной колоноскопии. Отделение оснащено новейшим 160-срезовым компьютерным томографом, единственным на Дальнем Востоке. Все исследования проходят под контролем ведущих врачей-рентгенологов, регулярно повышающих свой профессиональный уровень.' },
        { id: '5', name: 'Маммография', img: '../files/cmho.png', path: '/mamo', description: '123' },
        { id: '6', name: 'Центр Женского здоровья', img: '../files/cmho.png', path: '/czz', description: '123' },
        { id: '7', name: 'Центр Мужского здоровья', img: '../files/cmho.png', path: '/cmz', description: '123' },
        { id: '8', name: 'Программы Комплексного обследования', img: '../files/cmho.png', path: '/pko', description: '123' },
        { id: '9', name: 'Поликлинические врачи', img: '../files/cmho.png', path: '/pv', description: '123' },
        { id: '10', name: 'Рентген', img: '../files/cmho.png', path: '/rentgen', description: '123' },
        { id: '11', name: 'Центр лечения молочных желез', img: '../files/cmho.png', path: '/clmz', description: '123' },
        { id: '12', name: 'Отделение реабилитации и восстановления', img: '../files/cmho.png', path: '/reab', description: '123' },
        { id: '13', name: 'Медицинская  Комиссия', img: '../files/cmho.png', path: '/medkom', description: '123' },
        { id: '14', name: 'Отделение Хирургии  и травматологии', img: '../files/cmho.png', path: '/hirurg', description: '123' },
        { id: '15', name: 'Отделение дерматовенерологии', img: '../files/cmho.png', path: '/dermo', description: '123' },
        { id: '16', name: 'Отделение колопроктологии', img: '../files/cmho.png', path: '/kolo', description: '123' },
        { id: '17', name: 'Терапевтическое отделение', img: '../files/cmho.png', path: '/terap', description: '123' },


    ]
    const pathname = usePathname()
    return (
        <div>
        {
            pathname.includes('mrt') ? <div className="text-[1.5rem] border p-[20px]">{ServiceList[0].description}</div> : ''
        }
        {
            pathname.includes('kt') ? <div className="text-[1.5rem] border p-[20px]">{ServiceList[1].description}</div> : ''
        }
        {
            pathname.includes('uzi') ? <div className="text-[1.5rem] border p-[20px]">{ServiceList[2].description}</div> : ''
        }
        {
            pathname.includes('lab') ? <div className="text-[1.5rem] border p-[20px]">{ServiceList[3].description}</div> : ''
        }
        {
            pathname.includes('mamo') ? <div className="text-[1.5rem] border p-[20px]">{ServiceList[4].description}</div> : ''
        }
        {
            pathname.includes('czz') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
        {
            pathname.includes('cmz') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
        {
            pathname.includes('pko') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
        {
            pathname.includes('pv') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
        {
            pathname.includes('rentgen') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
        {
            pathname.includes('clmz') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
        {
            pathname.includes('reab') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
        {
            pathname.includes('medkom') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
        {
            pathname.includes('hirurg') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
        {
            pathname.includes('dermo') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
        {
            pathname.includes('kolo') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
        {
            pathname.includes('terap') ? <div className="text-[1.5rem] border p-[20px]">Пока ничего нет :(</div> : ''
        }
            <Link href='/services'></Link>
        </div>

    )
}

