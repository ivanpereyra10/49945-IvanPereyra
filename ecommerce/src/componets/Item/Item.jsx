const Item = ({ id, name, img, category, price }) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid #ddd',
        padding: '10px',
        margin: '10px',
    };

    const imageStyle = {
        width: '200px',
        height: 'auto',
    };

    const textContainerStyle = {
        marginLeft: '10px',
        textAlign: 'left',
    };

    const categoryStyle = {
        color: '#666',
    };

    const priceStyle = {
        color: 'green',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '5px 10px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px',
    };

    return (
        <article style={containerStyle}>
            <img src={img} alt={name} style={imageStyle} />
            <div style={textContainerStyle}>
                <h3>{name}</h3>
                <p style={categoryStyle}>Categoría: {category}</p>
                <h4 style={priceStyle}>${price}</h4>
                <button style={buttonStyle}>Agregar</button>
            </div>
        </article>
    );
}

export default Item;

