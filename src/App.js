import "./App.css";
import { useState } from "react";
import BakeryItem from "./components/BakeryItem";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [names, setNames] = useState([])
  const [total, setTotal] = useState(0)

  function addToCart(name, price) {
    setNames([name, ... names]) 
    setTotal(total + price)
  }


  return (
    
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} addToCart={addToCart}/>// replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {
        /* TODO: render a list of items in the cart */}
        {names.map((name) => (
          <p>{name}</p>
        ))}
        ${total}
      </div>
    </div>
  );
}

export default App;
