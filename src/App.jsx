import { BrowserRouter, Link, Route,  Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Mobiles from "./Mobiles";
import Kurtis from "./Kurtis";
import Electronics from "./Electronics";
import Jewellery from "./Jewellery";
import Shoes from "./Shoes";
import "./App.css";

function App()
{
  return(

    <>
      <h1>Done by project</h1>
    <BrowserRouter>
<Link to="/home" className="link">Home</Link>
<Link to="/cart" className="link">Cart</Link>
<Link to="/mobiles" className="link">Mobiles</Link>
<Link to="/kurtis" className="link">Kurtis</Link>
<Link to="/electronics" className="link">Electronics</Link>
<Link to="/jewellery" className="link">Jewellery</Link>
<Link to="/shoes" className="link">Shoes</Link>
<Routes>
  <Route path="home" element={<Home />}/>
  <Route path="cart" element={<Cart />}/>
  <Route path="mobiles" element={<Mobiles />}/>
  <Route path="Kurtis" element={<Kurtis />}/>
  <Route path="electronics" element={<Electronics />}/>
  <Route path="jewellery" element={<Jewellery />}/>
  <Route path="shoes" element={<Shoes />}/>
  

</Routes>
 </BrowserRouter>
  
    </>
  )
}
export default App;
