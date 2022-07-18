import React from "react";

const ProductsList = ({ products, deleteProduct, selectProduct }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <div>
            <b>Category: </b> {product.category}
          </div>
          <div>
            <b>Price: </b> {product.price}
          </div>
          <div>
            <b>Is Available:</b> {product.isAvailable.toString()}
          </div>
          <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
          <button onClick={() => selectProduct(product)}>Editar</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
