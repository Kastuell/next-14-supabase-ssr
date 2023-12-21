
export default function TheFooter() {


    return (
        
        <div className=" py-[40px]">
            <div className="w-full h-0 border-t border-[#69c7f7] mt-5 mb-8" />
            <div className=" container   ">
                <div className=" text-[#65b0d6]">
                    Медицинский центр «Инвентум»
                </div>
                <div className=" text-[#65b0d6] pb-[20px]">
                    ООО &ldquo;Инвентум&ldquo;
                </div>
                <div className="flex pb-[20px]">
                    {/* добавить ссылки */}
                    <div className="flex flex-col items-start">
                        <a href='/files/fns.pdf' target="_blank" className=" hover:text-[#77c5ec] transition-colors delay-[350] cursor-pointer">ИНН: 2540230186</a>
                        <a href='/files/license.pdf' target="_blank" className=" hover:text-[#77c5ec] transition-colors delay-[350] cursor-pointer">Лицензия</a>
                        <a href='mailto:inventum_vlad@mail.ru' className=" hover:text-[#77c5ec] transition-colors delay-[350] cursor-pointer">E-mail: inventum_vlad@mail.ru</a>
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