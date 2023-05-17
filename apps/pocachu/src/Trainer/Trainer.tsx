import React, { useState } from "react";
import axios from "../api/axios"
import red from "../images/FireRed_LeafGreen_Red.webp"
import leaf from "../images/FireRed_LeafGreen_Leaf.webp"
import "./Trainer.css"
import { useNavigate } from "react-router-dom";


function Trainer(){
  const Trainer_URL = "/trainers";

  const navigate = useNavigate();
    const redirectDeck = () =>{
       
    };

  const [trainername, setTrainName] = useState("");
  const [gender, setGender] = useState("");

  const handleChange = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post(Trainer_URL,{
      name: trainername,
      gender: gender
    })
    .then(function(response: any){
      console.log(response);
      navigate(`/deckOf/`+response.data.id)
    })
    .catch(function(error: any){
      console.error(error);
    });
  }
  return (
    <div className="Trainer">
      <header className="Trainer-header">
        <h1 className="Trainer-h1"> Trainer creation</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter your trainer's name" name="trnname" required onChange={(e)=>handleChange(setTrainName, e)}></input>

        <div>
          <label>
              <input type="radio" name="sex" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')}></input>
              <img src={red} className="Trainer-Red"/>
          </label>

          <label>
              <input type="radio" name="sex" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')}></input>
              <img src={leaf} className="Trainer-Leaf" />
          </label>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Trainer;