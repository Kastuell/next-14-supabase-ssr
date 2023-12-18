import getDoctors from "@/actions/getDoctors";
import { toggle } from "@/actions/updateDoctors";
import ChangePost from "@/components/changee";

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
    <ChangePost />
  );
}
