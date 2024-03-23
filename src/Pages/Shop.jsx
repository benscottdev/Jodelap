import { useState } from "react";
import NavBar from "../Components/NavBar";
import productsForSale from "../shop.json";

function Shop() {
  const [hover, setHover] = useState(null);

  const handleHover = (item) => {
    setHover(item);
  };

  const offHover = () => {
    setHover(null);
  };

  return (
    <div className="shopContainer">
      <NavBar />
      <div className="shop">
        {productsForSale.map((item, index) => (
          <div
            className="item"
            key={index}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={offHover}
          >
            <a href="">
              <img src={item.image} alt="" />
            </a>
            <div
              className="itemInfo"
              style={{ opacity: hover === index ? 1 : 0 }}
            >
              <h1>{item.product}</h1>
              <h2>${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Shop;
