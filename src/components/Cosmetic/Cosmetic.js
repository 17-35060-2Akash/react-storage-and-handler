import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }

    const removeFromCart = (id) => {
        removeFromDb(id);
    }

    const deleteCart = () => {
        deleteShoppingCart();
    }
    // const addToCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h1>Name: {name}</h1>
            <p>Id: {id}</p>
            <p>Price: {price}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={deleteCart}>Remove Cart</button>
        </div>
    );
};

export default Cosmetic;