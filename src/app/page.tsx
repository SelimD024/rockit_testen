
import Image from 'next/image'
import Hypoform from "@/app/components/forms/Hypoform";
import berekenRenteMaandBedrag from "@/app/components/hypo/bereken_maandelijks_rente";

const DebugRente  =  () => {
    let Data = berekenRenteMaandBedrag(1, 3000);
    console.log(Data);
};

const DebugForm = async (resultaat: number) => {
     "use server"
    DebugRente();
    console.log(resultaat);
}
export default function Home() {
  return (
    <Hypoform prop1={DebugForm}  />
  )
}
