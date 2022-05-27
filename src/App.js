
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Share/Navigation/Navigation";
import Home from "./Components/Home/Home";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navigation></Navigation>

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
