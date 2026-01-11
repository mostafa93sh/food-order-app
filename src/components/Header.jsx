import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";

function Header() {
  const ctx = useContext(CartContext);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="reteraunt logo" />
        <h1>Food Order App</h1>
      </div>
      <nav>
        <Button textOnly>
          Cart ({ctx.items.reduce((total, item) => total + item.quantity, 0)})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
