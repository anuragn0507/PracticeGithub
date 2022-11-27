import "./App.css";
import Nav from "./Components/NavBar/Nav";
import NewUser from "./Components/User/NewUser";
import Users from "./Components/User/Users";
import Electronic from "./Components/Products/Electronic";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <NewUser />
      <Users />
      <Routes>
        <Route path="/" element={<Electronic />} />
        <Route path="/elec" element={<Electronic />} />
      </Routes>
    </div>
  );
}

export default App;
