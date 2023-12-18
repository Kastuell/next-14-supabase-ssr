import getDoctors from "@/actions/getDoctors";
import { toggle } from "@/actions/updateDoctors";
import { Star } from "lucide-react";

export default async function Doctors() {
  // const img = "../doctor.jpg";
  // const special = "Терапевт";
  // const name = "Иванов Иван Иванович";
  // const stage = "20 лет";

  // const testData = [
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  //   { id: 1, special: special, name: name, stage: stage, img: img },
  // ];

  // async function toggle( is_favorite: any, id: any) {
  //   updateDoctors(is_favorite, id)
  //   console.log( 'is_favorite:', is_favorite , 'id', id)

  // }

// @ts-ignore
  const tgl = (is_favorite: any, id: any) => {
    toggle(is_favorite, id)
  }

  
  const data = await getDoctors()
  console.log(data)
  return (
    <div className="container">
      <div>
        <h1 className=" text-4xl">Наши Врачи</h1>
        <div className="mt-10 grid grid-cols-4 gap-4 lg+:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm+:grid-cols-1 text-center">
          {data?.map((doctor:any) => (
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
                <button onClick={tgl(doctor.is_favorite, doctor.id)}>{doctor.is_favorite == false ? <Star /> : <Star color="yellow" />}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
