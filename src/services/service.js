const baseUrl="http://localhost:9011/customerGateway"
const getAllProducts = (arg) => {
    const url=baseUrl+arg
    return fetch(url);
}

const purchaseProduct = (productDetails) => {
    const url = `${baseUrl}/purchaseProduct`
    return fetch(url, {
        method:'POST',
        body: JSON.stringify(productDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
const updateProductDetails=(productDetails) => {
    const url = `${baseUrl}/updateProduct`
    return fetch(url, {
        method:'PUT',
        body: JSON.stringify(productDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
const addProduct=(productDetails) => {
    const url = `${baseUrl}/addProduct`
    return fetch(url, {
        method:'POST',
        body: JSON.stringify(productDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export default {
    getAllProducts,
    purchaseProduct,
    updateProductDetails,
    addProduct
}