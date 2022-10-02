import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Shared/Navigation/Navigation";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="orders" element={<Orders />}></Route>
        <Route path="inventory" element={<Inventory />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
