import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"


const ItemDetailContainer = () => {
    const [product, setProduct] =useState(null) 

    useEffect(() => {
        getProductById('1')
        .then(product => {
             SetProduct(product)
        })  
    }, [])
    return(
        <div>
            <h1>Detalle del producto</h1>
        </div>
    )
}

export default ItemDetailContainer