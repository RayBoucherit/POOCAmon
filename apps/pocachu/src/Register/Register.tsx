import './Register.css';

import { Link, Outlet } from "react-router-dom";

function Register(){
  /*const redirectTrainer = () =>{
    navigate('/trainer')
  };

  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post(Register_URL,{
      name: username,
      password: password,
    })
    .then(function(response: any){
      console.log(response);
    })
    .catch(function(error: any){
      console.error(error);
    });

  }*/
  return (
    <div className="Register">
      <header className="Register-header">
        <nav className="Register-nav">
          <Link to="/register/signIn" type="lien"><li>SignIn</li></Link>
          <Link to="/register/signUp" type="lien"><li>SignUp</li></Link>
        </nav>
        < Outlet />
      </header>
      
    </div>
  );
}


/*function Register(){
  return (
      <div className="Register">
        <header className="Register-header">
          <h1 className="Register-h1"> Register </h1>
        </header>
        <form action="register" method="post">
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required></input>
          
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required></input>

          <button type="submit">Register</button>
        </form>
      </div>
    );
}*/

export default Register;

