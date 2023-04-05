import { getShoppingCart } from "../utilities/fakedb"

const cartLoader= async()=>{
    const loadProducts =  await fetch('products.json')
    const products = await loadProducts.json()
    let savedCart = []
    const storedCart = getShoppingCart()
    for(const id in storedCart){
        const addedCart = products.find(pd => pd.id === id)
        if(addedCart){
            const quantity = storedCart[id]
            addedCart.quantity = quantity;
            savedCart.push(addedCart)
        }
    }
    return savedCart;
}
export default cartLoader;