import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

function Header() {
  const ctx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="reteraunt logo" />
        <h1>Food Order App</h1>
      </div>
      <nav>
        <Button textOnly onClick={progressCtx.showCart}>
          Cart ({ctx.items.reduce((total, item) => total + item.quantity, 0)})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
