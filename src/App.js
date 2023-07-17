import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
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
        <NavBar/>
      </div>
    </div>
  );
}

export default App;
