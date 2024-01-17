import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav style= {{ display: 'flex', justifyContent:'space-between', alignItems: 'center' }}>
            <h1>LeBron</h1>
            <section>
                <button>Buzos</button>
                <button>Remeras</button>
                <button>Pantalon</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar