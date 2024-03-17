import AutofitGrid from '@/Components/AutoFitGrid';
import BasicCardNoImg from '@/Components/BasicCardNoImg';
import Page from '@/Components/Pages';
import styled from 'styled-components';

export default function Tools(props) {
    return (
        <>
            <Page title="Tools & Utilities" description="Cari Alat atau Aplikasi yang dapat kamu gunakan disini">
                <ToolsWrapper>
                    <AutofitGrid>
                        <BasicCardNoImg slug="/tools/sum" title="Penambahan & Penjumlahan" description="Kamu dapat menambahkan items dan dapat menjumlahakan totalnya di sini, cocok buat kalian yang mau belanja nih" />
                        <BasicCardNoImg slug="/tools/bot-things" title="ETMC-BOT TOOLS" description="Tools Buat ETMC Bot klean nih yg pake" />
                        <BasicCardNoImg slug="/tools/valentines" title="Valentines" description="Gave it to your babe!" />
                    </AutofitGrid>
                </ToolsWrapper>
            </Page>
        </>
    );
}

const ToolsWrapper = styled.div`
margin:3rem;
align-item: center;
`
