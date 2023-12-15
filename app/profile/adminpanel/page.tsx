
import readUserSession from "@/lib/actions";
import createSupabaseServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {

	const { data } = await readUserSession()

	if (!data.session) {
		return redirect("/auth-server-action")
	}
	const supabase = await createSupabaseServerClient()
	const { error } = await supabase
		.from('doctors')
		.insert({ id: 1, name: 'Denmark' })
	return (
		<div>
			<input type="text" />
		</div>
	);
}
