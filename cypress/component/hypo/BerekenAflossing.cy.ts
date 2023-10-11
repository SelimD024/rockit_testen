import {berekenJaarinkomen} from "@/app/components/hypo/bereken_max_bedrag";
import {berekenAflossingbedrag, berekenTotaleMaandbedrag, berekenTotaalbedrag} from "@/app/components/hypo/bereken_aflossing";
import berekenRenteMaandBedrag from "@/app/components/hypo/bereken_maandelijks_rente";

describe('Bereken aflossing ', () => {
    it('Aflossing maandbedrag (excl rente)', () => {
        expect(berekenAflossingbedrag(3000)).to.equal(425);
    });

    it('Bereken totale maandbedrag', () => {
        expect(berekenTotaleMaandbedrag(1, 3000)).to.equal(680.51);
    });

    it("Bereken uiteindelijk totaal bedrag na 30 jaar", () => {
        expect(berekenTotaalbedrag(1, 3000)).to.equal(244983.6)
    })
});