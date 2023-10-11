'use client'
import BerekenMaxBedrag from "@/app/components/hypo/bereken_max_bedrag";
import berekenRenteMaandBedrag from "@/app/components/hypo/bereken_maandelijks_rente";
import {useState} from "react";
import RenteInfo from '@/resources/renteinfo.json';
import {number} from "prop-types";



export default function Hypoform(props: any) {
    const [Maandsalaris, setMaandsalaris] = useState<number>(0);
    const [RenteperiodeId, setRenteperiodeId] = useState<number>(1  );
    const [RenteMaandbedrag, setRenteMaandbedrag] = useState<number>(0);
    const [PartnerKeuze, setPartnerKeuze] = useState<number>(   0);
    const [PartnerMaandSalaris, setPartnerMaandSalaris] = useState<number>(   0);


    const RenteList = RenteInfo.rentevaste_periodes.map((key, index) => {
        return (
            <option value={key.id} key={index}>{key.jaar} jaar</option>
        )
    })

    const PartnerInput = (keuze : number) => {
        if (keuze == 1) {
            return (
                <input onChange={(e) => {
                    setPartnerMaandSalaris(parseInt(e.target.value));
                }} placeholder="Om te testen"></input>
        )
        }
    }

    return (
        <div className="Hypoform container flex flex-col">
            <div className="form-box p-2">
                <label className="block text-lg font-bold">Maandinkomen</label>
                <input className="border-gray-500 border-2 " type="number" onChange={(e) => {setMaandsalaris(parseInt(e.target.value));}}></input>
            </div>

            <div className="form-box p-2">
                <label className="block text-lg font-bold">Aflossing termijnen</label>
                <select onChange={(e) => {
                    setRenteperiodeId(parseInt(e.target.value));}} value={RenteperiodeId} className="p-2 border-gray-500 border-b-2">
                    {RenteList}
                </select>
            </div>




            <div className="form box-2 p-2" >
                <label className="block text-lg font-bold">Partner?</label>
                <select onChange={(e) => {
                    setPartnerKeuze(parseInt(e.target.value));
                }} value={PartnerKeuze} className="p-2 border-gray-500 border-b-2">
                    <option value="0">Ik heb geen partner</option>
                    <option value="1">Ja</option>
                </select>
                {PartnerInput(PartnerKeuze)}
            </div>

                <button onClick={(e) => {
                    props.prop1(BerekenMaxBedrag(Maandsalaris));
                    setRenteMaandbedrag(berekenRenteMaandBedrag(RenteperiodeId, Maandsalaris ));}}>
                    Bekijk resultaten
                </button>

            {PartnerInput(1) &&
                <p>{Maandsalaris + PartnerMaandSalaris}</p>
            }
            <p>{Maandsalaris}</p>
            <p>{PartnerKeuze}</p>
            <p>{RenteperiodeId}</p>
            <p>{RenteMaandbedrag}</p>
        </div>
    )
}