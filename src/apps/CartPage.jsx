import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const productList = await res.json();
    const cartList = await Promise.all(
      productList.map(async (item) => {
        const res = await fetch("https://fakestoreapi.com/products/" + item.id);
        const productDetails = await res.json();
        return {
          ...productDetails,
          qty: 0,
        };
      })
    );
    setCartItems(cartList);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const Card = ({ product }) => {
    return (
      <div>
        <p>
          <img height={20} width={20} src={product.image} alt="product-item" />
        </p>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>
          <button onClick={() => handleRemoveItem(product.id)}>-</button>
          {product.qty}
          <button onClick={() => handleAddItem(product.id)}>+</button>
        </p>
      </div>
    );
  };

  return (
    <div>
      {cartItems.map((cartItem) => (
        <Card key={cartItem.id} product={cartItem} />
      ))}
    </div>
  );
};

export default CartPage;
