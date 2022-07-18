import { useState } from "react";
import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductList";
import "App.css";

function App() {
    const initialProducts = [
        {
            id: 1,
            name: "audifonos",
            category: "Technology",
            price: 100,
            isAvailable: true
        },
        {
            id: 2,
            name: "coca cola",
            category: "food",
            price: 1,
            isAvailable: false
        }
    ];

    const [products, setProducts] = useState(initialProducts);
    const [productSelected, setProductSelected] = useState(null);

    const addProduct = (newProduct) => {
        alert("Añadiendo");
        console.log(newProduct);
        // products.push(newProduct);
        setProducts([...products, newProduct]);
    };

    const deleteProduct = (id) => {
        const filteredProducts = products.filter((product) => product.id !== id);
        setProducts(filteredProducts);
    };

    const selectProduct = (product) => {
        setProductSelected(product);
    };

    const deselectProduct = () => setProductSelected(null);

    const updateProduct = (productUpdated) => {
        alert("Actualizando");
        console.log(productUpdated);
        const index = products.findIndex(
            (product) => product.id === productUpdated.id
        );
        products[index] = productUpdated;
        setProducts([...products]);
    };

    console.log(productSelected);

    return (
        <div className="App">
            <ProductsForm
                addProduct={addProduct}
                productSelected={productSelected}
                updateProduct={updateProduct}
                deselectProduct={deselectProduct}
            />
            <ProductsList
                products={products}
                deleteProduct={deleteProduct}
                selectProduct={selectProduct}
            />
        </div>
    );
}

export default App;
