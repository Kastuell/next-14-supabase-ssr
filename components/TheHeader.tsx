'use client'

import Image from "next/image";
import Link from "next/link";
import logo from '../images/logo.png';
import HamburgerMenu from "./HamburgerMenu";

export default function TheHeader() {



    const NavInfo = [
        { id: 1, href: '/', text: 'Главная', },
        { id: 2, href: '/services', text: 'Услуги', },
        { id: 3, href: '/doctors', text: 'Врачи', },
        { id: 4, href: '/blog', text: 'Блог', },
        { id: 5, href: '/register', text: 'Запись', },
        { id: 6, href: '/about', text: 'О нас', },
    ]


    return (
        <>
            {/* <div className='relative
                        top-0
                        left-0
                        right-0
                      bg-[#65b0d6]
                        h-20vh
                        w-100vw
                      text-white'>
                <div className='grid 
                            grid-col-3
                            grid-flow-col'>
                    <div className='float-left p-2 border'>logo</div>
                    <div className='grid grid-cols-5'>
                        {Nav.map((nav) => <li key={nav.id} className='list-none text-center'>
                            <Link href={nav.href} className='no-underline p-2 block border'>{nav.text}</Link>
                        </li>)}
                    </div>
                    <div className='float-right p-2 border'>log in</div>

                </div>
            </div> */}
            <div className="container">
                <nav className="flex justify-between items-center pt-[26px]">
                    <a href="/" className="self-baseline"><Image src={logo} alt="logo"></Image></a>
                    <div>
                        <h2 className="text-maincolor">
                            8(423)279-0000
                        </h2>
                        <p>
                            Единая справочная служба
                        </p>
                    </div>
                    <ul className="flex items-center gap-12 lg:gap-6 md:hidden">
                        {NavInfo.map(item => <li><Link href={item.href} className="font-medium 
                                text-xl 
                                text-stone-800 
                                hover:text-maincolor 
                                transition-colors 
                                lg:text-base
                                ">{item.text}</Link></li>)}
                        {/* <li><Link href="" className="font-medium text-xl text-stone-800 hover:text-[#69c7f7] transition-colors lg:text-base">Главная</Link></li>
                                <li><Link href="" className="font-medium text-xl text-stone-800 hover:text-[#69c7f7] transition-colors lg:text-base">Услуги</Link></li>
                                <li><Link href="" className="font-medium text-xl text-stone-800 hover:text-[#69c7f7] transition-colors lg:text-base">Врачи</Link></li>
                                <li><Link href="" className="font-medium text-xl text-stone-800 hover:text-[#69c7f7] transition-colors lg:text-base">Блог</Link></li>
                                <li><Link href="" className="font-medium text-xl text-stone-800 hover:text-[#69c7f7] transition-colors lg:text-base">Запись</Link></li>
                                <li><Link href="" className="font-medium text-xl text-stone-800 hover:text-[#69c7f7] transition-colors lg:text-base">О нас</Link></li> */}
                    </ul>
                    <div className="hidden md:block">
                        <HamburgerMenu NavInfo={NavInfo} />
                    </div>

                </nav>

            </div>
            <div className="w-full h-0 border-t border-maincolor mt-5 mb-8" />
        </>
    );

}