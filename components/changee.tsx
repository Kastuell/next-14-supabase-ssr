'use client'

import "easymde/dist/easymde.min.css"
import { Star } from "lucide-react"
import { useState } from 'react'




function ChangePost({ doctorId, doctorFavorite }: any) {

    const [favorite, setFavorite] = useState<boolean>(doctorFavorite)
    // const { id, favorite } = post
    // @ts-ignore
    // async function changePoste(id: any) {
    //     setFavorite((prev:boolean) => !prev)
    //     const { data, error } = await supabase
    //         .from('doctor')
    //         .update({ favorite: true })
    //         .eq( 'id', id )
    //         .select()
    //     if (error) {
    //         console.log(error);
    //     }
    //     console.log(favorite)
    //     if(data){
    //         console.log(data)

    //     }
    // }
    return (
        <>
            {/* <button onClick={() => changePoste(doctorId)} > {doctorFavorite == false ? <Star /> : <Star color="yellow" />}</button > */}
            <button onClick={() => setFavorite((prev: any) => !prev)} > {favorite == false ? <Star /> : <Star color="yellow" />}</button >
            {/* <input type="checkbox" value='true' onChange={()=> changePoste(doctorId)} /> Избранное */}
        </>

    )
}

export default ChangePost