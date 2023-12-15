"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
	name: z.string().min(1, {
		message: "Имя обязательно!",
	}),
	special: z.string().min(1, {
		message: "Специальность обязательна!",
	}),
	stage: z.number().min(1, {
		message: "Стаж обязателен",
	}),
});

export default function CreateForm() {

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			special: "",
			stage: 0,
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "Врач был создан",
			// description: (
			// 	<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
			// 		<code className="text-white">{data.title} is created</code>
			// 	</pre>
			// ),
		});
		form.reset();
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full space-y-6"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Добавление нового врача</FormLabel>
							<Input
								placeholder="name"
								{...field}
								onChange={field.onChange}
							/>
							<Input
								placeholder="special"
								{...field}
								onChange={field.onChange}
							/>
							<Input
								placeholder="stage"
								{...field}
								onChange={field.onChange}
							/>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full flex gap-2">
					Create
				</Button>
			</form>
		</Form>
	);
}
