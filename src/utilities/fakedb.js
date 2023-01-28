const addToDb = id => {
    let shoppingCart;
    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
        console.log(shoppingCart);
    }
    else {
        shoppingCart = {};
    }


    //add quantity
    const quantity = shoppingCart[id];
    console.log(quantity);
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    const shoppingCart = JSON.parse(storedCart);
    if (storedCart) {
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
        else {
            console.log('id doesnt exist in cart');
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}


export { addToDb, removeFromDb, deleteShoppingCart };