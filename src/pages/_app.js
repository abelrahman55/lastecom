import { createContext, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/styles.scss";
import { USER_ID } from "configs/AppConfig";

export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {
  const [cart, setCart] = useState([]);
  const queryClient = new QueryClient();
  const [alldata,setlldata]=useState({});
  useEffect(() => {
    setlldata(JSON.parse(localStorage.getItem(USER_ID)))

  }, []);
  const logout=()=>{
    setlldata({})

    localStorage.removeItem(USER_ID);
  }

  //const id=window.localStorage.getItem(USER_ID);
  return (
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={{ cart, setCart,alldata,logout }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
