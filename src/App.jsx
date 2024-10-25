import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import Calculator from "./pages/Calculator/Calculator";
import Components from "./pages/Components/Components";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";
import Animation from "./pages/Animation/Animation";

import Layout from "./layouts/Layout/Layout";
import Login from "./pages/Login/Login";

import { fetchProducts } from "./data/products";

import "./App.css";

const intTab = "Home";

function App() {
  const [token, setToken] = useState(""); 
  const [role, setRole] = useState("");  
  const [tab, setTab] = useState("");
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  useEffect(() => {
    setTab(intTab);
  }, []);

  // ถ้ายังไม่มี token ให้แสดงหน้า Login
  if (token === "") {
    return <Login setToken={setToken} setRole={setRole} />;  // ส่ง setToken และ setRole ไปที่ Login
  } else {
    
  

  // ถ้ามี token แล้วจะแสดงผลส่วนอื่นๆ ของแอป
  return (
    <div className="App-container">
      <HashRouter>
        <Routes>
          <Route
            element={<Layout products={products} carts={carts} setToken={setToken} token={token} role={role} />}  // ส่ง role ไปที่ Layout ด้วย
          >
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Components" element={<Components />} />
            <Route path="/Animation" element={<Animation />} />
            <Route path="/Todo" element={<Todo />} />
            <Route path="/Products" element={<Products products={products} carts={carts} setCarts={setCarts} />} />
            <Route path="/Carts" element={<Carts carts={carts} setCarts={setCarts} />} />
            <Route path="/Login" element={<Login setToken={setToken} setRole={setRole} />} />  {/* แก้ตรงนี้ด้วย */}
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
}
export default App;
