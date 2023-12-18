'use client'

import "easymde/dist/easymde.min.css"
import { useState } from 'react'
import { supabase } from './api'


const initialState = { name: '', special: '', stage: 0 }



function CreatePost() {
    const [post, setPost] = useState(initialState)
    const { name, special, stage } = post
    // @ts-ignore
    function onChange(e) {
        setPost(() => ({ ...post, [e.target.name]: e.target.value }))
    }
    async function createNewPost() {
        if (!name || !special) return
        // const user = supabase.auth.user()
        // const id = uuid()
        // post.id = id
        // const { data } = await supabase
        //     .from('doctor')
        //     .insert([
        //         { name, special, stage }
        //     ])
        //     .single()
        const { data, error } = await supabase
            .from('doctor')
            .insert([
                { name, special, stage }
            ])

        if (error) {
            console.log(error);
        }
        console.log(post)
    }
    return (
        <div>
            <h1 className="text-3xl font-semibold tracking-wide mt-6">Создать нового врача</h1>
            <input
                onChange={onChange}
                name="name"
                placeholder="Имя"
                value={post.name}
                className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
            />
            <input
                onChange={onChange}
                name="special"
                placeholder="Специальность"
                value={post.special}
                className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
            />
            <input
                onChange={onChange}
                name="stage"
                placeholder="Стаж"
                value={post.stage}
                className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
            />

            {/* <SimpleMDE
                value={post.content}
                onChange={value => setPost({ ...post, content: value })}
            /> */}
            <button
                className="mb-4 bg-green-600 text-white font-semibold px-8 py-2 rounded-lg"
                onClick={createNewPost}
            >Создать</button>
        </div>
    )
}

export default CreatePost