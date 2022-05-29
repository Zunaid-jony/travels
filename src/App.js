
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Share/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Login from './Components/Login/Login/Login';
import Register from "./Components/Login/Register/Register";
import Service from "./Components/Home/Service/Service";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";



function App() {
  return (
    <div className="App">
  <AuthProvider>
    <BrowserRouter>
     <Navigation></Navigation>

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/service" element={<Service></Service>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      
       {/* dashboard a route goal akahne */}
      <Route path="/dashboard"
                element={<Dashboard></Dashboard>}
            >
              <Route path="login" element={<Login></Login>}></Route>
       </Route>



      <Route path="/register" element={<Register></Register>}></Route>
     
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
