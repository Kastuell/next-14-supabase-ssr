'use client'
import YandexMap from "./YandexMap";

const Direction = () => {


    return (
        <div className="mt-[40px]">
            {/* <div className=" border  justify-center
                             flex-col flex m-[0_auto] w-[66%] p-[40px] sm:p-[10px] sm:w-[80%] mobil:p-[10px]: mobil:w-[80%]">
                <h2 className=" text-4xl flex justify-between items-center m-[0_auto] ">Как добраться?</h2>
                <div>
                    <div className="flex 
                             items-center
                             justify-center
                             flex-col
                             text-center
                             m-[40px_auto_0px_auto]
                             text-xl
                             ">
                        Найти легко: остановка автобуса 7, 55 , 54. 3 я рабочая (которая прямо на кольце!)
                        Справо пешеходный переход, подняться по лестнице.
                        Рядом высотное здание 18 эт. Подняться на 2 этаж.!
                    </div>
                    <YandexMap />
                </div>

            </div> */}
            <h2 className="text-4xl text-maincolor">Как добраться?</h2>

            <div className="border p-[40px] md:p-[5px] mt-[20px]">
                <div className="flex lg:flex lg:flex-col lg:mt-[20px] lg:items-center">
                    <div className="text-xl">
                        Найти легко:<br /> остановка автобуса 7, 55 , 54. 3 я рабочая (которая прямо на кольце!)
                        Справо пешеходный переход, подняться по лестнице.
                        Рядом высотное здание 18 эт. Подняться на 2 этаж!
                        <br />
                        Имеется лифт для маломобильных!
                    </div>
                    <YandexMap />
                </div>
            </div>
        </div>
    )
}

export default Direction;