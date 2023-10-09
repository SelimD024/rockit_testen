'use client'
import BerekenMaxBedrag from "@/app/components/hypo/bereken_max_bedrag";
import {useState} from "react";
import RenteInfo from '@/resources/renteinfo.json';
import {number} from "prop-types";



export default function Hypoform(props: any) {
    const [Maandsalaris, setMaandsalaris] = useState<number>(0);

    const RenteList = RenteInfo.rentevaste_periodes.map((key, index) => {
        return (
            <option key={index}>{key.jaar} jaar</option>
        )
    })

    return (
        <div className="Hypoform">
                <label>Maandinkomen</label>
                <input type="number" onChange={(e) => {setMaandsalaris(parseInt(e.target.value));}}></input>
            <select>
                {RenteList}
            </select>
                <button onClick={(e) => { props.prop1(BerekenMaxBedrag(Maandsalaris))}}>Bekijk resultaten</button>
        </div>
    )
}