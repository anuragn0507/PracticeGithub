import "./App.css";
import Nav from "./Components/NavBar/Nav";
import NewUser from "./Components/User/NewUser";
import Users from "./Components/User/Users";
import Electronic from "./Components/Products/Electronic";
import { Routes, Route } from "react-router-dom";
import ProductEDetails from "./Components/Products/ProductEDetails";

function App() {
  return (
    <div className="App">
      <Nav />
      <NewUser />
      <Users />
      <Routes>
        
        <Route path="/elec" element={<Electronic />} />
        <Route path="/productDetails/:id" element={<ProductEDetails />} />
      </Routes>
    </div>
  );
}

export default App;
