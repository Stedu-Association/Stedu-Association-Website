import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import MeetTheTeam from "./page/MeetTheTeam";
import SteduClub from "./page/SteduClub";

function App() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="font-montserrat">
      <Router>
      <div>
        <NavBar/>
      </div>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/login" element={<button onClick={() => loginWithRedirect()}>Log In</button>} exact/>
          <Route path="/meet_the_team" element={<MeetTheTeam/>} exact/>
          <Route path="/stedu_club" element={<SteduClub/>} exact/>
        </Routes>
      </Router>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
