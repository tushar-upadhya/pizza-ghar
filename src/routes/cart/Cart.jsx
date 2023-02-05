import React from "react";
import ScrollBtn from "../../components/ScrollBtn";
import EmptyCart from "./EmptyCart";

const Cart = ({ cartItems, clearedCart, fullCart, cartTotals }) => {
    document.title = "Cart | Pizza Ghar";
    return (
        <main className="cart-container">
            <h1>Cart</h1>
            {cartItems.length === 0 ? <EmptyCart /> : fullCart}
            {clearedCart === true ? null : cartTotals}
            <ScrollBtn />
        </main>
    );
};

export default Cart;
