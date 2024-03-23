import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <div className="homeNav">
      <Link className="link" to="/about">
        ABOUT
      </Link>
      <Link className="link" to="/shop">
        SHOP
      </Link>
      <Link className="link" to="/contact">
        CONTACT
      </Link>
    </div>
  );
}
export default HomeNav;
