import {Route, Routes} from "react-router-dom";
import {Header} from "./component/Header";
import {Home} from "./component/Home";
import {LoginForm} from "./component/LoginForm";
import {SignupForm} from "./component/SignupForm";
import {Footer} from "./component/Footer";
import {Detail} from "./component/Detail";
import {Error} from "./component/Error";
import {Cart} from "./component/Cart";
import {useState} from "react";
import Cookies from "universal-cookie";
import ItemList from "./component/ItemList";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/login"} element={<LoginForm/>}/>
                <Route path={"/signup"} element={<SignupForm/>}/>
                <Route path={"/:id"} element={<Detail/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"/search"} element={<ItemList/>}/>
                <Route path={"*"} element={<Error/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
