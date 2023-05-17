import {useState, useEffect } from "react";
import { Deck } from "../../src/entities"
import axios from "../api/axios"
import {useNavigate} from "react-router-dom";


function DeckPage(){
  const id  = window.location.href.split("/").at(window.location.href.split("/").length-1)

  const [decks, setItemElements] = useState<Deck[]>([]);
  const navigate = useNavigate();
  const redirectCards = (id :number) =>{
    navigate('/deck/'+id)
  };

  const newDeck = async () => {
    const res = axios.post(`/newDeck/nouveau/`+id)
    .then(function(response: any){
      console.log(response);
      console.log(res);
      fetchCards();
      navigate('/deck/'+response.data.id)
    })
    .catch(function(error: any){
      console.error(error);
    });
   
  };


  const fetchCards = async () => {
    try {
        const response = await axios.get(`/allDeck/`+id);
        var items = []
        console.log("ici",response.data)
        for (let i = 0; i < response.data.length; i++) {
          const item = response.data[i];
          items.push(item);
        }

        setItemElements(items);
        console.log("deck",decks);
    } catch (error) {
        console.error(error);
    }
};

  useEffect( () => {
    fetchCards();
   
  }, []);



  
  return (
    <>

    
    <div>
      <h1>Deck de l'utilisateur {id}</h1>
      <div>
      <ul>
    {decks.map((element) => <li ><div>{element.name}<br></br><button
              className="button-cards"
              onClick={()=>redirectCards(element.id)}
            >
      modifier</button><br></br><button>supprimer</button></div></li>)}

      </ul>
    </div>
    <div>
    <button
              className="button-cards"
              onClick={()=>newDeck()}
            >
      nouveau Deck</button>
        </div>
    </div>
    </>
    
  );
}


export default DeckPage;
