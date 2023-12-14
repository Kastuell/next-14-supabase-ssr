import { FaInstagram } from "react-icons/fa";

export default function TheFooter() {

    const Icons = [
        { id: '1', href: '/', tag: <FaInstagram /> },
        { id: '2', href: '/', tag: <FaInstagram /> },
        { id: '3', href: '/', tag: <FaInstagram /> },
        { id: '4', href: '/', tag: <FaInstagram /> },
        { id: '5', href: '/', tag: <FaInstagram /> },
    ]

    const NavInfo = [
        { id: 1, href: '/', text: 'Главная', },
        { id: 2, href: '/', text: 'Услуги', },
        { id: 3, href: '/', text: 'Врачи', },
        { id: 4, href: '/', text: 'Блог', },
        { id: 5, href: '/', text: 'Запись', },
        { id: 6, href: '/', text: 'О нас', },
    ]

    return (
        // <div className='
        //                 mt-auto
        //               bg-[#65b0d6]
        //                 w-100vw
        //                 pt-40
        //               text-white'>
        //     <div className='flex 
        //                     items-center
        //                     justify-center
        //                     flex-col
        //                     text-center'>
        //         <h3 className='text-4xl
        //                        font-medium
        //                        capitalize
        //                        leading-10'>Инвентум</h3>
        //         <p className='max-w-lg
        //                       mt-3
        //                       leading-7
        //                       text-lg
        //                       text-white'>Клиника лечения головной боли и вегетативных дисфункций<br />
        //             Все виды медицинской помощи<br />
        //             Выезд врачей и мед. сестёр на дом<br />
        //             Вакцинопрофаликтика</p>
        //         <ul className='list-none
        //                        flex
        //                        items-center
        //                        justify-center
        //                        mt-4
        //                        mr-0
        //                        mb-12
        //                        ml-0'>
        //             {Icons.map((icon) => <li key={icon.id} className='my-0 mx-3'>
        //                 <a href={icon.href} className='no-underline
        //                                              block
        //                                              ml-2
        //                                              text-white
        //                                              border-2
        //                                              divide-solid
        //                                              border-white
        //                                              p-1
        //                                              rounded-full'>{icon.tag}</a>
        //             </li>)}
        //         </ul>

        //     </div>
        //     <div className='bg-[#65b0d6]
        //                 w-100vw
        //                 p-5
        //                 pb-10
        //                 text-center'>
        //         <p className='float-left
        //                       text-sm
        //                       capitalize'>copyright &copy; <a href="/" className='text-white
        //                                                                         text-base
        //                                                                         no-underline'>Timur</a></p>
        //         <div className='float-right
        //                             sm: flex
        //                             sm: mt-[2.5]
        //                             sm: mb-5'>
        //             <ul className='flex'>
        //                 {NavInfo.map((item) => <li key={item.id} className='pr-[2.5] block'>
        //                     <a href={item.href} className='text-[#cfd2d6] no-underline hover:text-white'></a>
        //                 </li>)}
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        // bg-[#e4eaec]
        <div className=" py-[40px]">
            <div className="w-full h-0 border-t border-[#69c7f7] mt-5 mb-8" />
            <div className=" container   ">
                <div className=" text-[#65b0d6]">
                    Медицинский центр «Инвентум»
                </div>
                <div className=" text-[#65b0d6] pb-[20px]">
                    ООО "Инвентум"
                </div>
                <div className="flex pb-[20px]">
                    {/* добавить ссылки */}
                    <div className="flex flex-col items-start">
                        <a href="/files/fns.pdf" target="_blank" className=" hover:text-[#77c5ec] transition-colors delay-[350] cursor-pointer">ИНН: 2540230186</a>
                        <a href="/files/license.pdf" target="_blank" className=" hover:text-[#77c5ec] transition-colors delay-[350] cursor-pointer">Лицензия</a>
                        <a href="mailto:inventum_vlad@mail.ru" className=" hover:text-[#77c5ec] transition-colors delay-[350] cursor-pointer">E-mail: inventum_vlad@mail.ru</a>
                        <div>г. Владивосток, пр. Красного знамени 114 а, второй этаж., Мед. центр Инвентум</div>
                    </div>
                </div>
                <div>
                    Уважаемые пациенты, для получения подробной информации о наличии и стоимости указанных услуг,
                    пожалуйста, по телефонам:<br />
                    8(423) 2 393 747<br />
                    89084473633
                </div>
            </div>
        </div>

    );
}

//                 position: absolute;
//                 bottom: 0;
//                 left: 0;
//                 right: 0;
//                 background: #111;
//                 height: auto;
//                 width: 100vw;
//                 padding-top: 40px;
//                 color: #fff;