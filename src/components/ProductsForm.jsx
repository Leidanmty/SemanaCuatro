import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProductsForm = ({
  addProduct,
  productSelected,
  updateProduct,
  deselectProduct
}) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    if (productSelected !== null) {
      setName(productSelected.name);
      setCategory(productSelected.category);
      setPrice(productSelected.price);
      setIsAvailable(productSelected.isAvailable);
    } else {
      reset();
    }
  }, [productSelected]);

  const submit = (e) => {
    e.preventDefault();
    const product = {
      name,
      category,
      price: price,
      isAvailable: isAvailable
    };
    if (productSelected !== null) {
      // Actualizando
      product.id = productSelected.id;
      updateProduct(product);
      deselectProduct();
    } else {
      product.id = Date.now();
      addProduct(product);
      reset();
    }
  };

  const reset = () => {
    setName("");
    setCategory("");
    setPrice("");
    setIsAvailable(false);
  };

  return (
    <form onSubmit={submit}>
      <h1>Products Form</h1>

      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div className="input-container">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
      </div>

      <div className="input-container">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>

      <div className="input-container">
        <label htmlFor="isAvailable">Is Available</label>
        <input
          type="checkbox"
          id="isAvailable"
          onChange={(e) => setIsAvailable(e.target.checked)}
          checked={isAvailable}
        />
      </div>

      <button>{productSelected !== null ? "Update" : "Create"}</button>
      {productSelected !== null && (
        <button onClick={deselectProduct} type="button">
          Clear
        </button>
      )}
    </form>
  );
};

export default ProductsForm;
