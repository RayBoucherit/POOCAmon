
import {Route, Routes} from "react-router-dom";

import Register from './Register/Register';
import Cards from './Cards/Cards';
import DisplayDeck from './DisplayDeck/DisplayDeck'
import DisplayDeckOfUser from './DisplayDeckOfUser/DisplayDeckOfUser'
import Trainer from './Trainer/Trainer'
import Home from './Home/Home'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>}>
          <Route path="/register/signIn" element={<SignIn/>}/>
          <Route path="/register/signUp" element={<SignUp/>}/>
        </Route>
        <Route path="/cards" element={<Cards/>} />
        <Route path="/trainer" element={<Trainer/>} />
        <Route path="/deckOf/:id" element={<DisplayDeckOfUser/>} />
        <Route path="/deck/:id/" element={<DisplayDeck/>} />
      </Routes>

    </div>
  );
}

export default App;
