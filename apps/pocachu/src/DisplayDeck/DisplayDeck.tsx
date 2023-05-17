import { useState, useEffect } from "react";
import axios from "../api/axios"
import { Card } from "../../src/entities"
import './display.css'

function DeckPage(){

  const id  = window.location.href.split("/").at(window.location.href.split("/").length-1)
  const [cards, setItemElements] = useState<Card[]>([]);
  const [allCards, setItemElements2] = useState<Card[]>([]);
  const handleDelete = (index: number) => {
    const newItems = [...cards];
    newItems.splice(index, 1);
    axios.post("/DeleteCardsOnDeck",{
      id,
      index,
    })
    setItemElements(newItems);
  };

  const addCards = async (card: Card) => {
    const res = axios.post("/addCardsOnDeck/"+id+"/"+card.id)
    .then(function(response: any){
      console.log(response);
      console.log(res);
      fetchCards();
    })
    .catch(function(error: any){
      console.error(error);
    });
  };

  const fetchCards = async () => {
    try {
        const response = await axios.get(`/NewDeck/`+id);
        var items = []
        console.log("ici",response.data)
        for (let i = 0; i < response.data.cards.length; i++) {
          const item = response.data.cards[i];

          items.push(item);
        }

        setItemElements(items);
        console.log("deck",cards);

    } catch (error) {
        console.error(error);
    }

    try {
      const response = await axios.get(`/cards`);
      var items2 = []
      console.log("ici",response)
      for (let i = 0; i < response.data.length; i++) {
        const item = response.data[i];

        items2.push(item);
      }

      setItemElements2(items2);
      console.log("all cards",allCards);

  } catch (error) {
      console.error(error);
  }
};

useEffect( () => {
  fetchCards();
 
}, []);

return (
  <div className="Board">
    <h1>Deck {id}</h1>
  
    <div style={{ display: 'flex' }}>
      <div style={{ width: '60%' }}>
        <h2>Liste de cartes</h2>
        <ul>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}  className="Affiche-deck">
        {cards.map((element,index) => <div className="cartes"><img src={element.img.concat("/high.webp")} alt={element.name}style={{ width: 140, height: 190 }} /><button className="bu" onClick={() => handleDelete(index)}>Supprimer</button></div>)}
        </div>
        </ul>
      </div>
      
  
      <div style={{ width: '40%' ,height: '900px', overflow: 'auto'}}>
        <h2>Ajouter</h2 >
        <ul className="Affiche-liste">
          {allCards.map((item) => (
            <li key={item.id}>
             <div style={{ display: 'inline',}}>
             {item.name}
             <button className="bu" onClick={() => addCards(item)}>ajouter</button>
             <img src={item.img.concat("/high.webp")} alt={item.name}style={{ width: 140, height: 190 }} className="item-image" />
             </div>
            </li>            
          ))}
        </ul>
       
      </div>
    </div>
    </div>    
  );
}
export default DeckPage;
