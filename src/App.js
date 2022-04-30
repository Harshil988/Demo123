// import logo from './logo.svg';
// import './App.css';
import Home from "./Home"
import Nav from "./Nav";
import Add from "./Add";

import { Route, Routes } from "react-router-dom";
import Example from "./Example";


function App() {
  return (
    <div className="App">

      <div>
        <Nav />
      </div>

      <Routes>
        <Route>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/ex" element={<Example/>} />

          <Route path="*" element={<Home />} />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
