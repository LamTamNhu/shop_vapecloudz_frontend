import {Route, Routes} from "react-router-dom";
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
import {getCart} from "./service/ItemService";

function App() {
    const [cart, setCart] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies();
    useEffect(() => {
        async function fetchCartApi() {
            if (cookie.email == null) {
                return
            }
            const result = await getCart(cookie.email)
            console.log(result)
            if (result.status === 200) {
                const cartData = result.data
                setCart(cartData)
            }
        }

        fetchCartApi()
    }, [cookie]);

    function updateCart(item) {
        const updatedCart = [...cart, item];
        setCart(updatedCart)
    }

    return (
        <>
            <Header cart={cart}/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/login"} element={<LoginForm/>}/>
                <Route path={"/signup"} element={<SignupForm/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"/search"} element={<ItemList/>}/>
                <Route path={"/product/:id"} element={<ItemDetail updateCart={updateCart}/>}/>
                <Route path={"*"} element={<Error/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
