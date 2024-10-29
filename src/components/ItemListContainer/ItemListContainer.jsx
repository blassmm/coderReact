import { useState, useEffect } from "react";
import { getProducts } from "../../data/data.js";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("finalizo la promesa");
      });
  }, []);

  const listaProductos = products.map((product) => (
    <div key={product.id}>
      <h2>{product.name}</h2>
      <img src={product.image} alt="" width={100} />
      <p>Precio: ${product.price}</p>
    </div>
  ))

  return (
    <div>
      <h2>{greeting}</h2>
      <div>{listaProductos}</div>
    </div>
  );
};

export default ItemListContainer;
