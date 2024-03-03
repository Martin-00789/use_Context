import { useContext } from "react";
import { ProductsContext } from "../Context/ProductContextProvider";
import { TotalContext } from "../Context/TotalContextProvider";

export const CardsContainer = () => {

  const products = useContext(ProductsContext);
  const [total, setTotal] = useContext(TotalContext);


  return (
    <div className="cardContainer">
      {products.map(products => {
        return (
          <div className="card" key={products.id}>
            <img src={products.images[0]} className="card-img" alt="img" />
            <p className="prodcut-name">{products.title}</p>
            <div className="priceContainer">
              <p className="price">$ {products.price}</p>
              <button onClick={() => { setTotal(total + products.price) }}>Add to cart</button>
            </div>
          </div>)
      })}
    </div>
  )
}
