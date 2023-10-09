import BerekenMaxBedrag from "@/app/components/hypo/bereken_max_bedrag";
import Renteinfo from "@/resources/renteinfo.json";
import {IRenteVastePeriodes} from "@/interfaces/IRente_vaste_periodes";

const RenteInfo = Renteinfo["rentevaste_periodes"];

export const decimaalNaarMaandelijkseRente = (id : number) => {
    return RenteInfo[id - 1].percentage / 12;
}

export const berekenRenteMaandBedrag = (id : number, maandbedrag : number) => {
    return BerekenMaxBedrag(maandbedrag) * decimaalNaarMaandelijkseRente(id);
}


export default berekenRenteMaandBedrag;