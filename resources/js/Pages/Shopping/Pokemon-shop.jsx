import Page from "@/Components/Pages";
import { Head } from "@inertiajs/react";
import { getDatabase, get,ref, child} from "firebase/database";
import React, { useEffect, useState } from "react";
import {app} from "../../../../firebaseConfig";
import ShopCard from "@/Components/ShopCard";
import AutofitGrid from "@/Components/AutoFitGrid";

export default function PokemonShop(props) {

    const [dataShop, setDataShop] = useState([]);

    useEffect(() => {
        const dbd = ref(getDatabase(app));
        get(child(dbd, `dataData/delay`)).then((snapshot) => {
            if(snapshot){
                const datas = snapshot.val();
                const filteredData = Object.keys(datas).reduce((acc, key) => {
                    if(key !== 'fightCooldown'){
                        acc[key] = datas[key];
                    }
                    return acc;
                }, []);
                setDataShop(filteredData);
            }else{
                console.error('hmmmm')
            }
        }).catch((err) => {
            console.log(err);
        })
    },[])

    return(
        <>
        <Head title={props.title}/>
            <div className="md">
                <Page title="Welcome to Shop Adventurer" description="You Can Only Take the Best Offer's that i have!">
                    <AutofitGrid>
                        {dataShop.map((a, i) => {
                            <ShopCard key={i}/>
                        })}
                    </AutofitGrid>
                </Page>
            </div>
        </>
    )

};
