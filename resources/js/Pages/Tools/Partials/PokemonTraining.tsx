import { child, get, getDatabase,ref } from 'firebase/database';
import {app} from '../../../../../firebaseConfig';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '@/Components/Button';
import ButtonGroup from '@/Components/ButtonGroup';

interface PokemonData {
  ATTACK: number,
  DEFENSE: number,
  EXP: number, 
  HP: number,
  LVL: number,
  MAXHP: number,
  SPEED: number,
  TYPE: string,
  namaPokemon: string,
}

export default function PokemonTraining() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
  const [isPokemonExist, setIsPokemonExist] = useState(false);
  const [trainingTicket, setTrainingTicket] = useState(0);
  const [noHp, setNoHp] = useState('');
  const [title, setTitle] = useState("");
  const [refreshEffect, setRefreshEffect] = useState(false);
  const noHPDB = `${noHp}_c_us`;
  
  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);
  
  async function HandlerNoHP(noHP : string){
    const RegexNo0 = /^0/;
    const noHP62 = noHP.replace(RegexNo0, '62');
    setNoHp(noHP62);
  }
  
  useEffect(() => {
    const noHPDBs = `${noHp}_c_us`;
    const dbsd = ref(getDatabase(app));
    get(child(dbsd, `dataPengguna/pengguna/${noHPDBs}`))
    .then(async(snapshot) => {
      const Datas = snapshot.val().pokemon;
      const TT = Datas.inventory.trainingTicket;
      setTrainingTicket(TT);
      if(Datas && Datas.gacoan){
        const Gacoan = Datas.gacoan;
        setTitle(Datas.gacoan.namaPokemon);
        const dataArray: PokemonData[] = Object.values({Gacoan});
        setPokemonData(dataArray)
        setIsPokemonExist(true);
      }
      else{
        setTitle("Kamu Belum Memiliki Pokemon");
        setTrainingTicket(0);
        setIsPokemonExist(false);
        setPokemonData([])
      }
    })
    .catch((err) => {
      setTitle("Masukan Nomor Dengan Benar");
      setIsPokemonExist(false);
      setTrainingTicket(0);
      setPokemonData([])
    });

  }, [noHp, isPopupVisible, refreshEffect]);
  
  const Training = async () => {
    const dataToSend = {noHPDB, pokemonData, trainingTicket}
      try {
        const response = await fetch('/api/training-pokemon', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({data: dataToSend})
        });
        const responseData = await response.json();
        setTitle(responseData.message);
        if(responseData.message === 'DONE'){
          setRefreshEffect(!refreshEffect);
        }
      } catch(error){
        console.error(error);
      }
  };

  return (
    <>
      <ArticleCardWrapper className="article-card-wrapper" onClick={openPopup}>
        <Content>
          <Title>Pokemon Training</Title>
          <Descriptions>Gunakan Training Ticketmu di sini untuk memperkuat Pokemonmu !!</Descriptions>
        </Content>
      </ArticleCardWrapper>
      {isPopupVisible && (
        <PopupForm>
          <PopupContent>
            <PopupTitle >{title}</PopupTitle>
           <Descriptions>
              Nomor HP :<br/>
              <Input type='number' placeholder='6281234567891' value={noHp} onChange={(e) => HandlerNoHP(e.target.value)} />
            </Descriptions>
            <br/>
            <Descriptions>Training Ticket: {trainingTicket} pcs</Descriptions>
            <Descriptions>
              {pokemonData.map((a, i) => {
                return(
                <WrapperPokemonData key={i}>
                  Data Pokemon
                  <li>Name: {a.namaPokemon}</li>
                  <li>Level: {a.LVL}</li>
                  <li>Type: {a.TYPE}</li>
                  <li>EXP: {(a.EXP).toLocaleString()}</li>
                  <li>MaxHP: {(a.MAXHP).toLocaleString()}</li>
                  <li>HP: {(a.HP).toLocaleString()}</li>
                  <li>Attack: {(a.ATTACK).toLocaleString()}</li>
                  <li>Defense: {(a.DEFENSE).toLocaleString()}</li>
                  <li>Speed: {(a.SPEED).toLocaleString()}</li>
                </WrapperPokemonData>
                  )
              })}
            </Descriptions>
            <ButtonGroup>
              <Button transparent={'true'} onClick={closePopup}>Close</Button>
              <Button disabled={!isPokemonExist} onClick={() => Training()} transparent={'true'} >TRAINING!</Button>
            </ButtonGroup>
          </PopupContent>
        </PopupForm>
      )}
    </>
  );
}



const Input = styled.input`
  border: 1px solid rgb(var(--inputBackground));
  background: rgb(var(--inputBackground));
  color: rgb(var(--text))
  border-radius: 0.6rem;
  max-width: 21.5rem;
  max-height: 3rem;
  font-size: 1.6rem;
  padding: 1.8rem;
  box-shadow: var(--shadow-md);

  &:focus {
    outline: none;
    box-shadow: var(--shadow-lg);
  }
`;

const PopupForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  `;
  
  const PopupContent = styled.div`
  background: white;
  padding: 2rem;
  min-width: 250px;
  min-height: 150px;
  background: rgb(var(--cardBackground));
  border-radius: 0.6rem;
  text-align: left;
`;

const PopupTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ArticleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 35rem;
  overflow: hidden;
  text-decoration: none;
  border-radius: 0.6rem;
  background: rgb(var(--cardBackground));
  cursor: pointer;
  color: rgb(var(--text));
  padding-bottom: 3rem;
`;

const Content = styled.div`
  margin-top: 2rem;
  text-align:center;
  & > * {
    margin-top: 1rem;
  }
`;

const Title = styled.h4`
  font-size: 1.8rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const WrapperPokemonData = styled.div`
padding-top: 2rem;
`


const Descriptions = styled.p`
  font-size: 1.6rem;
  text-overflow: ellipsis;
  opacity: 0.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;