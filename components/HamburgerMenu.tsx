import Link from "next/link";
import { FC, useState } from "react";

interface HamburgerMenuI {
    NavInfo: any[]
}

const HamburgerMenu: FC<HamburgerMenuI> = ({ NavInfo }) => {

    const [isVisible, setVisible] = useState<boolean>(false)

    return (
        <>

            <div className="border-none w-6 h-6 md:float-right cursor-pointer transition-all z-9999" onClick={() => setVisible(prev => !prev)}>
                <div className="h-[3px] w-6 absolute bg-slate-500 my-0 mx-auto transition-all ease-in-out delay-150 hover:bg-[#65b0d6]
                                after:content-[' '] after:h-[3px] after:w-full after:absolute after:bg-slate-500 after:my-0 after:mx-auto after:bottom-[7px] after:transition-all after:ease-in-out after:delay-150 hover:after:bg-[#65b0d6]
                                before:content-[' '] before:h-[3px] before:w-full before:absolute before:bg-slate-500 before:my-0 before:mx-auto before:top-[7px] before:transition-all before:ease-in-out before:delay-150 hover:before:bg-[#65b0d6]">
                                    <span className="top-[21px]"></span>
                </div>
            </div>
            {isVisible &&
                <div className="flex flex-col gap-y-2 p-8 bg-green-50 absolute top-[70px] right-10 border z-50">
                    <ul className="flex flex-col gap-3 bg-green">
                        {NavInfo.map(item => <li key={item.id} className="list-none"><Link href={item.href} className="font-medium 
                                text-xl 
                                text-stone-800 
                                hover:text-maincolor 
                                transition-colors 
                                lg:text-base">{item.text}</Link></li>)}
                    </ul>
                </div>
            }


        </>

    )
}

export default HamburgerMenu;