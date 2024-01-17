const Item = ({ id, name, img, category, price }) => {
    return (
        <article>
            <h3>{name}</h3>
            <img src={img}/>
            <p> Categoria:{category}</p>
            <h4>${price}</h4>
        </article>
    )

}

export default Item     