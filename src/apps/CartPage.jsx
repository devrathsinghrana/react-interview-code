import React from "react";

const Card = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.image} height={100} width={100} />
      <p>
        <button onClick={props.removeItem}>-</button>
        {props.itemCount}
        <button onClick={props.addItem}>+</button>
      </p>
    </div>
  );
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case "GET_CART_PRODUCTS":
      return { ...state, cart: action.payload };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: (() =>
          state.cart.map((item) => {
            return {
              ...item,
              ...(item.id === action.payload && {
                itemCount: item.itemCount + 1,
              }),
            };
          }))(),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: (() =>
          state.cart.map((item) => {
            return {
              ...item,
              ...(item.id === action.payload &&
                item.itemCount > 0 && {
                  itemCount: item.itemCount - 1,
                }),
            };
          }))(),
      };
    case "LOADING_STATE":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
const CartPage = () => {
  const [cart, setCart] = React.useReducer(reducerFn, {
    cart: [],
    isLoading: false,
  });
  function logErrors(...args) {
    console.log(`${this.er} ${[...args]}`);
  }
  const getAllProducts = async () => {
    try {
      // throw new Error("API FAILED!")
      setCart({ type: "LOADING_STATE", payload: true });
      const res = await fetch("https://fakestoreapi.com/products");
      const allProducts = await res.json();
      const cartProducts = await Promise.all(
        allProducts.map(async (product) => {
          const res = await fetch(
            `https://fakestoreapi.com/products/${product.id}`
          );
          const productDetails = await res.json();
          return { ...productDetails, itemCount: 0 };
        })
      );
      setCart({ type: "GET_CART_PRODUCTS", payload: cartProducts });
      setCart({ type: "LOADING_STATE", payload: false });
    } catch (er) {
      setCart({ type: "LOADING_STATE", payload: false });
      setCart({ type: "GET_CART_PRODUCTS", payload: [] });
      logErrors.apply({ er }, ["error looged", "cartPage", "empty the cart"]);
    }
  };

  React.useEffect(() => {
    getAllProducts();
    return () => setCart([]);
  }, []);

  function handleAddToCart() {
    setCart({
      type: "ADD_TO_CART",
      payload: this.id,
    });
  }
  function removeFromCart() {
    setCart({
      type: "REMOVE_FROM_CART",
      payload: this.id,
    });
  }

  if (cart.isLoading) return <p>Loading...</p>;
  return (
    <div>
      <ul>
        {cart.cart.length > 0 &&
          cart.cart.map((cartItem) => (
            <Card
              key={cartItem.id}
              {...cartItem}
              removeItem={() => removeFromCart.call(cartItem)}
              addItem={() => handleAddToCart.call(cartItem)}
            />
          ))}
      </ul>
    </div>
  );
};

export default CartPage;
