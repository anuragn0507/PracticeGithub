
import {Routes,  Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </div>
  );
}

export default App;
