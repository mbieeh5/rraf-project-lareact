import Page from "@/Components/Pages";
import { Head } from "@inertiajs/react";
import { getDatabase, get,ref, child} from "firebase/database";
import React, { useEffect, useState } from "react";
import {app} from "../../../../firebaseConfig";
import ShopCard from "@/Components/ShopCard";
import AutofitGrid from "@/Components/AutoFitGrid";


export default function PokemonShop() {

    const [dataShop, setDataShop] = useState([]);

    useEffect(() => {
        const dbd = ref(getDatabase(app));
        get(child(dbd, `dataData/delay`)).then(async(snapshot) => {
            if(snapshot){
                const datas = snapshot.val() || {};
                const filteredData = Object.keys(datas).reduce((acc, key) => {
                    if(key !== 'fightCooldown'){
                        acc[key] = datas[key];
                    }
                    return acc;
                }, []);
                const datasFinal = Object.values(filteredData)
                setDataShop(datasFinal);
            }else{
                console.error('hmmmm')
            }
        }).catch((err) => {
            console.log(err);
        })
    },[])


    return(
        <>
            <div className="md">
                <Page title="Welcome to Shop Adventurer" description="You Can Only Take the Best Offer's that i have!">
                    <AutofitGrid>
                        {dataShop.map((a,i) => {
                             return (
                                <ShopCard 
                                key={i} 
                                ID={i}
                                stock={a.stock}
                                price={a.harga}
                                img={a.img} 
                                title={a.name} 
                                link={'#'}
                                description={a.desc}/>
                                )
                        })}
                    </AutofitGrid>
                </Page>
            </div>
        </>
    )

};
