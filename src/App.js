import {Route, Routes, useNavigate} from "react-router-dom";
import {Header} from "./component/Header";
import {Home} from "./component/Home";
import {LoginForm} from "./component/LoginForm";
import {SignupForm} from "./component/SignupForm";
import {Footer} from "./component/Footer";
import {Error} from "./component/Error";
import {Cart} from "./component/Cart";
import ItemList from "./component/ItemList";
import ItemDetail from "./component/ItemDetail";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {addToCart, getCart} from "./service/ItemService";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";

function App() {
    const [cart, setCart] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies([]);
    const nav = useNavigate()
    useEffect(() => {
        fetchCartApi()

    }, []);

    async function fetchCartApi() {
        if (cookie.email == null) {
            setCart([])
            return
        }
        const result = await getCart(cookie.email)
        if (result.status === 200) {
            setCart(result.data)
        }
    }

    async function addToCartPrep(variantId, amount) {
        const dataToAdd = {variantId: variantId, amount: amount, email: cookie.email}
        await addToCart(dataToAdd)
        await fetchCartApi()
    }

    return (
        <>
            <PayPalScriptProvider options={{clientId:"AV5TYrnVirk0spH4TFMO0fm4Pw26yck_MWzmpolMnrl8JCbuj4-hZrSt7fen-JxqTBuOcJmI3V_bAgvg",currency:"USD",components:"buttons"}}>
                <Header cartLength={cart.length}/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/login"} element={<LoginForm reloadCart={fetchCartApi}/>}/>
                    <Route path={"/signup"} element={<SignupForm/>}/>
                    <Route path={"/cart"} element={<Cart reloadCart={fetchCartApi}/>}/>
                    <Route path={"/search"} element={<ItemList/>}/>
                    <Route path={"/product/:id"} element={<ItemDetail updateCart={addToCartPrep}/>}/>
                    <Route path={"*"} element={<Error/>}/>
                </Routes>
                <Footer/>
            </PayPalScriptProvider>
        </>
    );
}

export default App;
