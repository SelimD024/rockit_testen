import berekenRenteMaandBedrag , {decimaalNaarMaandelijkseRente} from "@/app/components/hypo/bereken_maandelijks_rente";
import {berekenJaarinkomen} from "@/app/components/hypo/bereken_max_bedrag";

describe('Bereken maandelijkse rente', () => {
    it('Bereken maandelijkse rente percentage', () => {
        expect(decimaalNaarMaandelijkseRente(1)).to.equal(0.00167);
    });
    it("Bereken maandelijkse rente bedrag", () => {
        expect(berekenRenteMaandBedrag(1, 3000)).to.equal(255.51, "Berekeningen zijn juist");
    })
})