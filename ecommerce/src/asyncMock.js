const products = [
    { 
        id: '1', 
        name: 'THRASHER HOODIE MEN DEVILS MUSIC', 
        price: 50000, 
        category: 'THRASHER MAGAZINE', 
        img:'https://dtskateboarding.vtexassets.com/arquivos/ids/159672-800-auto?v=637897180260030000&width=800&height=auto&aspect=true', 
        stock: 25, 
        description:'THRASHER MAGAZINE'
    },
    { 
        id: '2', 
        name: 'THRASHER HOODIE GODZILLA', 
        price: 50000, 
        category: 'THRASHER MAGAZINE', 
        img:'https://dtskateboarding.vtexassets.com/arquivos/ids/159614-800-auto?v=637893629021500000&width=800&height=auto&aspect=true', 
        stock: 16, 
        description:'Descripcion de Samsung s21'
    },
    { 
        id: '3', 
        name: 'THRASHER HOODIE MEN BLOOD DRIP', 
        price: 50000, 
        category: 'THRASHER MAGAZINE', 
        img:'https://dtskateboarding.vtexassets.com/arquivos/ids/159590-800-auto?v=637868435649170000&width=800&height=auto&aspect=true', 
        stock: 0, 
        description:'Descripcion de Ipad'
    },
    // Agrega más productos aquí...
    { 
        id: '4', 
        name: 'THRASHER HOODIE MEN SKATEMAG', 
        price: 50000, 
        category: 'THRASHER MAGAZINE', 
        img:'https://dtskateboarding.vtexassets.com/arquivos/ids/159836-800-auto?v=637921497350170000&width=800&height=auto&aspect=true', 
        stock: 10, 
        description:'Descripción del nuevo producto 1'
    },
    
    
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 1000);
    });
};

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId));
        }, 1000);
    });
};
