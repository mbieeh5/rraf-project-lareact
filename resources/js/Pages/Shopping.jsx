import AutofitGrid from '@/Components/AutoFitGrid';
import BasicCard from '@/Components/BasicCard';
import BasicCardNoImg from '@/Components/BasicCardNoImg';
import Page from '@/Components/Pages';

export default function News(props) {
    return (
        <>
        <Page title={'Shopping'} description='Happy Shopping Take The Best Offers!'>

            <div className="py-12">
                <AutofitGrid>
                    <BasicCardNoImg slug="/shopping/pokemon-shop" title="Pokemon Shop's" description='Penuhi Kebutuhan & Perlengkapan Pokemonmu disini' />
                    <BasicCardNoImg slug="/shopping/undangan-online" title="Undangan Pernikahan" description='Bikin Undangan Online Juga Bisa Loh disini!' />
                </AutofitGrid>
            </div>
        </Page>
        </>
    );
}
