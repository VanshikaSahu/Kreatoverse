let _product= {}
export const ProductStore = {
    setProduct: (product) => {
        _product = product
        console.log(_product)
    },
    getProduct: () => {
        console.log(_product)
        return _product
    }
}