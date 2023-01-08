import { Link, Outlet } from "react-router-dom";
import { Nav } from "./style";

const NavBar = () => {
  return (
    <Nav>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to={`/characters`}>Characters</Link>
      </nav>
    </Nav>
  );
};

export default NavBar;
