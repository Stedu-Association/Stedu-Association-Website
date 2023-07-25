import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
      <div>
        {/* <NavBar/> */}
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
