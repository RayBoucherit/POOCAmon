import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Card } from "../../src/entities"

function Cards() {
    const [cards, setCards] = useState<Card[]>([]);
    const [showImage, setShowImage] = useState(false);
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const fetchCards = async () => {
        try {
            const response = await axios.get("/cards");
            setCards(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleNameClick = (card: Card) => {
        setSelectedCard(card);
        setShowImage(true);
    }

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <div className="Cards">
          <ul>
            {cards.map((card) => (
              <li key={card.id} onClick={() => handleNameClick(card)}>
                {card.name}
                {selectedCard === card && showImage && (
                  <img src={card.img.concat("/high.webp")} alt={card.name} style={{ width: 240, height: 320 }}/>

                )}
              </li>
            ))}
          </ul>
        </div>
    );
}

export default Cards;