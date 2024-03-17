import AutofitGrid from "@/Components/AutoFitGrid";
import Page from "@/Components/Pages";
import React from "react";
import AbsenCard from "./Partials/AbsenCard";
import ChangeName from "./Partials/ChangeName";
import PokemonTraining from "./Partials/PokemonTraining";
import Rank from "./Partials/Rank";


export default function BotThings(props) {

    return(
        <>
        <Page title="ETMC BOT TOOLS!">
            <AutofitGrid>
                <AbsenCard />
                <ChangeName />
                <PokemonTraining />
                <Rank />
            </AutofitGrid>
        </Page>
        </>
    )

};