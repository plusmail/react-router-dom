import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
      <div>
          <nav>
              <ul>
                  <li>
                      <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                      <Link to={"/about"}>About</Link>
                  </li>
              </ul>
          </nav>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/profile/:username"} element={<Profile/>}/>
          </Routes>

      </div>
  );
}

export default App;
