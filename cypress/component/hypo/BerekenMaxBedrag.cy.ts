import BerekenMaxBedrag , {berekenJaarinkomen} from "@/app/components/hypo/bereken_max_bedrag";
describe('Bereken Maximaal Hypotheek ', () => {
    it('Jaarinkomen berekend', () => {
        expect(berekenJaarinkomen(2000)).to.equal(24000);
    });

    it('Maximaal Hypotheek rechten berekend', () => {
        expect(BerekenMaxBedrag(3000)).to.equal(153000);
    });
})


