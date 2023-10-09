// import {IMaxhypobedrag} from "@/interfaces/IMaxhypobedrag";

let Maandinkomen: number;
let Jaarinkomen: number;

export const berekenJaarinkomen = (maandinkomen: number) => {
    Maandinkomen = maandinkomen;
    Jaarinkomen = Maandinkomen * 12;
    return Jaarinkomen;
}

export const BerekenMaxBedrag = (maandinkomen: number) => {
    berekenJaarinkomen(maandinkomen);
    return Jaarinkomen * 4.25;
}

export default BerekenMaxBedrag;