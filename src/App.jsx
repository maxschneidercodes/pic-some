import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route excact path="/" element={<Photos />} />
        <Route excact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
