import logo from '../images/pokeball.png';

import {useNavigate} from "react-router-dom";
import './Home.css'
import '../App.css'

function Home() {

  const navigate = useNavigate();
  const redirectCards = () =>{
    navigate('/cards')
  };
  const redirectRegister = () =>{
    navigate('/register/signIn')
  };

  return (
    <header className="Home-header">
        <h1 className="Home-h1"> Welcome to POCAchu ! </h1>
        <img src={logo} className="Home-logo" alt="logo" />
        <button
              className="button-start"
            onClick={(redirectRegister)}
            >
              Start Game
        </button>


        <button
              className="button-cards"
              onClick={(redirectCards)}
            >
              Cards List
        </button>
    </header>
  );
  
}

export default Home;