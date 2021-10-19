import { Link } from "react-router-dom";
import { CartIcon } from "../CartIcon/index";
import "./styles.js";
import { NavMenu } from "./styles.js";

export function Header() {
  return (
    <NavMenu className="container">
      <div className="logo">
        <Link to="/">NOMAD</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <CartIcon />
    </NavMenu>
  );
}
