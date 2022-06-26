import { NavLink } from "react-router-dom";

const headerNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/"> Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default headerNavigation;
