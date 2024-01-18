import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, price, description }) => {
    const handleOnAdd = (quantity) => {
        const objProducto = {
            id,
            name,
            quantity,
            price
        }

        console. log('Se agrego correctamente: ', objProducto)
    
    }
 
    return (
        <article>
            <h3>{name}</h3>
            <img src={img} style={{ width: 200}}/>
            <p> Categoria:{category}</p>
            <h4>${price}</h4>
            <p>description: {description}</p>
            <ItemCount stock={stock} onAdd={handleOnAdd} />
        </article>
    )

}

export default ItemDetail    