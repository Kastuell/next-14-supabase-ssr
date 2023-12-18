import { supabase } from "@/components/api";
import { FC } from "react";


interface I{
    is_male: any,
    id: any
}

const updateDoctors:FC<I> = async ({is_male, id}): Promise<any> => {
    
    const { error } = await supabase
        .from('doctor')
        .update({ is_male: is_male })
        .eq('id', id)

    if (error) {
        console.log(error);
    }
    console.log( 'is_male:', is_male , 'id', id)
}

export default updateDoctors;