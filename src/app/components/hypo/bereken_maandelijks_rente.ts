import BerekenMaxBedrag from "@/app/components/hypo/bereken_max_bedrag";
import Renteinfo from "@/resources/renteinfo.json";

const RenteInfo = Renteinfo["rentevaste_periodes"];

// Zet totale rente percentage om naar maandelijkse rente percentage
export const decimaalNaarMaandelijkseRente  = (id : number) => {
    const Maandelijksepercentage =  RenteInfo[id - 1].percentage / 12.;
    return parseFloat(Maandelijksepercentage.toFixed(5));
}

// Berekent Rentemaandbedrag:
// Hypomaxbedrag * Rente maandelijkse percentage
export const berekenRenteMaandBedrag = (id : number, maandinkomen : number) => {
    const Maandelijksebedrag: number =  BerekenMaxBedrag(maandinkomen) * decimaalNaarMaandelijkseRente(id);
    return parseFloat(Maandelijksebedrag.toFixed(2));
}


export default berekenRenteMaandBedrag;