import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error(error);
            }
        };

        
        fetchProducts();
        
    }, []); 

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </>
    );
};

export default ItemListContainer;
