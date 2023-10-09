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

    const RenteList = RenteInfo.rentevaste_periodes.map((key, index) => {
        return (
            <option value={key.id} key={index}>{key.jaar} jaar</option>
        )
    })

    return (
        <div className="Hypoform container flex flex-col">
            <div className="form-box p-2">
                <label className="block ">Maandinkomen</label>
                <input className="border-gray-800 border-2" type="number" onChange={(e) => {setMaandsalaris(parseInt(e.target.value));}}></input>
            </div>

            <div className="form-box p-2">
                <label className="block">Aflossing termijnen</label>
                <select onChange={(e) => {
                    setRenteperiodeId(parseInt(e.target.value));}} value={RenteperiodeId} className="p-2 border-gray-800 border-2">
                    {RenteList}
                </select>
            </div>
                <button onClick={(e) => {
                    props.prop1(BerekenMaxBedrag(Maandsalaris));
                    setRenteMaandbedrag(berekenRenteMaandBedrag(RenteperiodeId, Maandsalaris ));}}>
                    Bekijk resultaten
                </button>
            <p>{RenteperiodeId}</p>
            <p>{RenteMaandbedrag}</p>
        </div>
    )
}