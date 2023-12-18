import CreatePost from "@/components/createe";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
export default async function Page() {

	const { data } = await readUserSession()

	if (!data.session) {
		return redirect("/auth-server-action")
	}

	return (
		
		<div>
			<CreatePost />
		</div>
	);
}
