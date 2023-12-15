"use client"
import changeDoctors from "@/actions/changeDoctors";
import { FormEvent } from "react";

export default function Form() {
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)
        const formDataObject = Object.fromEntries(formData)

        changeDoctors(formDataObject)

        form.reset()
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                name="email"
                placeholder="email"
                required />
            <input type="text"
                name="special"
                placeholder="special"
                required />
            <button type="submit">Отправить</button>
        </form>
    )
}