import { useEffect, useState } from "react";
import data from "./info.json";

function App() {
  const [cart, setCart] = useState([]);
  const [fetch, setFetch] = useState(false);
  const [fetch2, setFetch2] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      console.log("Product Added to the cart.", cart);
    }
  }, [fetch]);

  useEffect(() => {
    if (cart.length >= 0) {
      console.log("Product Deleted", cart);
    }
  }, [fetch2]);

  const removeFromCartHandeler = (index) => {
    const newArray = cart.filter((element, id) => id !== index);
    setCart(newArray);
    setFetch2(!fetch2);
  };

  const addToCartHandeler = (name) => {
    setCart([...cart, name]);
    setFetch(!fetch);
  };

  return (
    <div>
      {data.data.map((data, index) => {
        return (
          <div key={index}>
            <h1 className="text-lg font-bold mb-3 mt-5 border-b-2 border-black w-20 ml-20">
              {data?.name}
            </h1>

            {data.productList.map((product, index) => {
              return (
                <div
                  key={index}
                  className="border-2 border-cyan-950 h-60 w-80 inline-block p-5 ml-20"
                >
                  <div className="text-lg">Name : {product?.name}</div>
                  <div className="text-lg">Price: {product?.price}</div>

                  <div>
                    <button
                      className="bg-blue-500 border-2 border-blue-900 p-2 mt-4 w-60 font-bold text-md text-center ml-4"
                      onClick={() => addToCartHandeler(product.name)}
                    >
                      Add To The Cart
                    </button>
                    <button
                      className="bg-blue-500 border-2 border-blue-900 p-2 mt-4 w-60 font-bold text-md text-center ml-4"
                      onClick={() => removeFromCartHandeler(index)}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
