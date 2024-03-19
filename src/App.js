import {Route, Routes} from "react-router-dom";
import {NavBar} from "./component/NavBar";
import {Home} from "./component/Home";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;
