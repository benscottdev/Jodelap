import { Link } from "react-router-dom";
import JodelapLogo from "../Assets/Jodelap_Logo.png";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBarLinks">
        <Link className="navBarLink" to="/about">
          ABOUT
        </Link>
        <Link className="navBarLink" to="/shop">
          SHOP
        </Link>
        <Link className="navBarLink" to="/contact">
          CONTACT
        </Link>
      </div>
      <Link to="/">
        <img src={JodelapLogo} alt="Jodelap Logo" />
      </Link>
    </div>
  );
}
export default NavBar;
