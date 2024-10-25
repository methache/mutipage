import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import "./Navbar.css";

const initPage = "Home";

function Navbar({ products, carts, token, setToken }) {  // รับ token และ setToken
  const [tab, setTab] = useState(initPage);

  return (
    <div className="navbar-container">
      <Link to={"./Home"}>
        <button
          className={
            "btn " + (tab === "Home" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("Home")}
        >
          Home
        </button>
      </Link>

      <Link to={"./Calculator"}>
        <button
          className={
            "btn " +
            (tab === "Calculator" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("Calculator")}
        >
          Calculator
        </button>
      </Link>

      <Link to={"./Components"}>
        <button
          className={
            "btn " +
            (tab === "Components" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("Components")}
        >
          Components
        </button>
      </Link>

      <Link to={"./Animation"}>
        <button
          className={
            "btn " +
            (tab === "Animation" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("Animation")}
        >
          Animation
        </button>
      </Link>

      <Link to={"./Todo"}>
        <button
          className={
            "btn " + (tab === "Todo" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("Todo")}
        >
          Todo
        </button>
      </Link>

      <Link to={"./Products"}>
        <button
          className={
            "btn " +
            (tab === "Products" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("Products")}
        >
          Products ({products.length})
        </button>
      </Link>

      <Link to={"./Carts"}>
        <button
          className={
            "position-relative btn " + (tab === "Carts" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("Carts")}
        >
          Carts
          { carts.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           {carts.length < 10 ? carts.length : "9+"}
            <span className="visually-hidden">unread messages</span>
          </span>
          )}
        </button>
      </Link>

      {/* แสดงปุ่ม Logout ถ้ามี token, ถ้าไม่มีจะแสดงปุ่ม Login */}
        
          <button className="btn btn-outline-danger"
           style={{marginLeft: '1rem'}}
            onClick={() => setToken("")}>
            Logout
          </button>
        
        
      
    </div>
  );
}

export default Navbar;
