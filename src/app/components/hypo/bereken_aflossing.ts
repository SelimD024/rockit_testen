import BerekenMaxBedrag from "@/app/components/hypo/bereken_max_bedrag";
import berekenRenteMaandBedrag from "@/app/components/hypo/bereken_maandelijks_rente";
export const berekenAflossingbedrag = (maandinkomen: number) => {
    return BerekenMaxBedrag(maandinkomen) / 360;
}

export const berekenTotaleMaandbedrag = (id: number, maandinkomen: number) => {
    return berekenAflossingbedrag(maandinkomen) + berekenRenteMaandBedrag(id, maandinkomen)
}

export const berekenTotaalbedrag = (id: number, maandinkomen: number) => {
    return berekenTotaleMaandbedrag(id, maandinkomen) * 360;
}


