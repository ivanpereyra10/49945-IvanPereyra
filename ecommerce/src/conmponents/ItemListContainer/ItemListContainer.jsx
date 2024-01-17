import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Utilizamos una función asincrónica dentro de useEffect
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error(error);
            }
        };

        // Llamamos a la función asincrónica
        fetchProducts();
        // Agregamos un arreglo vacío como segundo argumento para que useEffect se ejecute solo en el montaje inicial
    }, []); 

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </>
    );
};

export default ItemListContainer;
