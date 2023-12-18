'use client'

import getDoctors from "@/actions/getDoctors"
import "easymde/dist/easymde.min.css"
import { useState } from 'react'
import { supabase } from './api'


const initialState = { id: 0, is_favorite: false }



async function ChangePost() {
    const data = await getDoctors()

    const [post, setPost] = useState(initialState)
    const { id, is_favorite } = post
    // @ts-ignore
    async function createNewPost(id: any, is_favorite: any) {
        setPost(() => ({ ...post, [is_favorite]: !is_favorite, [id]: id }))
        if (post) return
        // const user = supabase.auth.user()
        // const id = uuid()
        // post.id = id
        // const { data } = await supabase
        //     .from('doctor')
        //     .insert([
        //         { name, special, stage }
        //     ])
        //     .single()
        const { error } = await supabase
            .from('doctor')
            .update({ is_favorite: is_favorite })
            .eq('id', id)
        if (error) {
            console.log(error);
        }
        console.log(post)
    }
    return (
        <div className="container">
            <div>
                <h1 className=" text-4xl">Наши Врачи</h1>
                <div className="mt-10 grid grid-cols-4 gap-4 lg+:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm+:grid-cols-1 text-center">
                    {data?.map((doctor: any) => (
                        <div id={doctor.id}>
                            <div className="flex flex-col   w-[250px] border border-maincolor rounded-t-[25px] overflow-hidden">
                                <div className="">
                                    <img className="w-[250px]" src={doctor.img} alt="" />
                                </div>
                                <div className="mt-[10px]">
                                    <div>{doctor.name.split(" ").slice(0, 1).join(" ")}</div>
                                    <div>{doctor.name.split(" ").slice(1, 3).join(" ")}</div>
                                </div>
                                <div>{doctor.special}</div>
                                <div className="mt-[20px] p-5 bg-maincolor">Стаж: {doctor.stage}</div>
                                {/* @ts-ignore  */}
                                <button onClick={createNewPost(doctor.id, doctor.is_favorite)}>{doctor.is_favorite == false ? <Star /> : <Star color="yellow" />}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChangePost