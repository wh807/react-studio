// TODO: create a component that displays a single bakery item

export default function BakeryItem({item, addToCart}) {
    return (
      <>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <img src={item.image}/>
        <button onClick={()=>addToCart(item.name, item.price)}>Add to Cart</button>
      </>
    );
  }
