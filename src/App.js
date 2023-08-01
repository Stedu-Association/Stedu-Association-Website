import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Router>
      <div>
        <NavBar/>
      </div>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
        </Routes>
      </Router>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
