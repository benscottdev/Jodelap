import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
export default App;
