const initialState = () => {
    return (
        JSON.parse(localStorage.getItem("audiophlie-products")) || {
            allProducts: [],
            price: 0,
            total: 0,
        }
    )
}