import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const WishlistContext = createContext();



export function WishlistProvider({ children }) {


  const [wishlistItems, setWishlistItems] = useState(() => {

    const savedWishlist =
      localStorage.getItem("wishlist");


    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];

  });



  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlistItems)
    );

  }, [wishlistItems]);





  const addToWishlist = (product) => {


    setWishlistItems((currentItems) => {


      const exists =
        currentItems.some(
          item => item.id === product.id
        );


      if (exists) {

        return currentItems;

      }


      return [

        ...currentItems,

        product

      ];


    });


  };





  const removeFromWishlist = (id) => {


    setWishlistItems((currentItems) =>

      currentItems.filter(
        item => item.id !== id
      )

    );


  };





  const wishlistCount =
    wishlistItems.length;





  return (

    <WishlistContext.Provider

      value={{

        wishlistItems,

        addToWishlist,

        removeFromWishlist,

        wishlistCount

      }}

    >

      {children}

    </WishlistContext.Provider>

  );

}





export function useWishlist() {

  return useContext(WishlistContext);

}