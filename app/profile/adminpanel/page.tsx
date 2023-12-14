
import { Button } from "@/components/ui/button";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import CreateForm from "./components/CreateForm";
import SignOut from "./components/SignOut";

export default async function Page() {

	const img = "../doctor.jpg";
	const special = "Терапевт";
	const name = "Иванов Иван Иванович";
	const stage = "20 лет";
	const doctors = [
		{ id: 1, special: special, name: name, stage: stage, img: img }
	];

	const { data } = await readUserSession()

	if (!data.session) {
		return redirect("/auth-server-action")
	}

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-96 space-y-5">

				<SignOut />
				<CreateForm />

				{doctors.map((doctor) => (
					<div>
						<div className="flex flex-col w-[250px] border border-maincolor rounded-t-[25px] overflow-hidden">
							<div className="">
								<img className="w-[250px]" src={doctor.img} alt="" />
							</div>
							<div className="mt-[10px]">
								<div>{doctor.name.split(" ").slice(0, 1).join(" ")}</div>
								<div>{doctor.name.split(" ").slice(1, 3).join(" ")}</div>
							</div>
							<div>{doctor.special}</div>
							<div className="mt-[20px] p-5 bg-maincolor">{doctor.stage}</div>
							<Button>Добавить</Button>
							<Button>Убрать</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
