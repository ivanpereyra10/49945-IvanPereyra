const products = [
    { 
        id: '1', 
        name: 'THRASHER HOODIE MEN DEVILS MUSIC', 
        price: 1000, 
        category: 'celular', 
        img:'https://dtskateboarding.vtexassets.com/arquivos/ids/159672-800-auto?v=637897180260030000&width=800&height=auto&aspect=true', 
        stock: 25, 
        description:'THRASHER MAGAZINE'
    },
    { id: '2', name: 'THRASHER HOODIE GODZILLA', price: 800, category: 'celular', img:'https://dtskateboarding.vtexassets.com/arquivos/ids/159614-800-auto?v=637893629021500000&width=800&height=auto&aspect=true', stock: 16, description:'Descripcion de Samsung s21'},
    { id: '3', name: 'THRASHER HOODIE MEN BLOOD DRIP', price: 1200, category: 'tablet', img:'https://dtskateboarding.vtexassets.com/arquivos/ids/159590-800-auto?v=637868435649170000&width=800&height=auto&aspect=true', stock: 0, description:'Descripcion de Ipad'}
]




export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}