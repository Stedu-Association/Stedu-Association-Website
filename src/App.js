import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

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
        </Routes>
      </Router>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
