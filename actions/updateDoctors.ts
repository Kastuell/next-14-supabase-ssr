"use client"

import { supabase } from "@/components/api";
import { FC } from "react";


interface I{
    is_favorite: any,
    id: any
}

// const updateDoctors:FC<I> = async ({is_favorite, id}): Promise<any> => {
    
//     const { error } = await supabase
//         .from('doctor')
//         .update({ is_favorite: is_favorite })
//         .eq('id', id)

//     if (error) {
//         console.log(error);
//     }
// }

// export default updateDoctors;
// @ts-ignore
export const toggle:FC<I> = async ({is_favorite, id}): Promise<any> => {
    const { error } = await supabase
    .from('doctor')
    .update({ is_favorite: is_favorite })
    .eq('id', id)

}