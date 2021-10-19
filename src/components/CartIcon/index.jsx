import shoppingBag from "../../assets/shopping-bag.png";
import { CartCointainer } from "./styles.js";

export function CartIcon() {
  return (
    <CartCointainer>
      <img src={shoppingBag} alt="shoppingBag" />
      <span className='cart-count'>
          5
      </span>
    </CartCointainer>
  );
}
