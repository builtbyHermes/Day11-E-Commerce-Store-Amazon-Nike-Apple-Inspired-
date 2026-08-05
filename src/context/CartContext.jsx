import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });

  /* ---------------- Drawer State ---------------- */

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {

    setIsCartOpen(true);

  };

  const closeCart = () => {

    setIsCartOpen(false);

  };

  const toggleCart = () => {

    setIsCartOpen(current => !current);

  };

  /* ---------------- Persist Cart ---------------- */

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  /* ---------------- Cart Actions ---------------- */

  const addToCart = (product, quantity = 1) => {

    setCartItems(currentItems => {

      const existingItem = currentItems.find(
        item => item.id === product.id
      );

      if (existingItem) {

        return currentItems.map(item =>

          item.id === product.id

            ? {
                ...item,
                quantity: item.quantity + quantity
              }

            : item

        );

      }

      return [

        ...currentItems,

        {
          ...product,
          quantity
        }

      ];

    });

    // Automatically open mini cart
    openCart();

  };

  const removeFromCart = (id) => {

    setCartItems(currentItems =>

      currentItems.filter(
        item => item.id !== id
      )

    );

  };

  const updateQuantity = (id, quantity) => {

    if (quantity <= 0) {

      removeFromCart(id);

      return;

    }

    setCartItems(currentItems =>

      currentItems.map(item =>

        item.id === id

          ? {
              ...item,
              quantity
            }

          : item

      )

    );

  };

  const clearCart = () => {

    setCartItems([]);

  };

  /* ---------------- Derived Values ---------------- */

  const cartCount = cartItems.reduce(

    (total, item) =>

      total + item.quantity,

    0

  );

  const cartTotal = cartItems.reduce(

    (total, item) =>

      total + item.price * item.quantity,

    0

  );

  return (

    <CartContext.Provider

      value={{

        cartItems,

        addToCart,

        removeFromCart,

        updateQuantity,

        clearCart,

        cartCount,

        cartTotal,

        isCartOpen,

        openCart,

        closeCart,

        toggleCart

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export function useCart() {

  return useContext(CartContext);

}