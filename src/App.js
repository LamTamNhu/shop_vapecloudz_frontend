import {Route, Routes} from "react-router-dom";
import {Header} from "./component/Header";
import {Home} from "./component/Home";
import {LoginForm} from "./component/LoginForm";
import {SignupForm} from "./component/SignupForm";
import {Footer} from "./component/Footer";
import {Detail} from "./component/Detail";
import {Error} from "./component/Error";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/login"} element={<LoginForm/>}/>
                <Route path={"/signup"} element={<SignupForm/>}/>
                <Route path={"/:id"} element={<Detail/>}/>
                <Route path={"*"} element={<Error/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
