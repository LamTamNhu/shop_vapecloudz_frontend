import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import styles from "../css/header.module.css"

export function Header({cartLength}) {
    const [cookie, setCookie, removeCookie] = useCookies();
    const [cartDisplay, setCartDisplay] = useState(0)
    const nav = useNavigate()

    useEffect(() => {
        function updateCartDisplay() {
            setCartDisplay(cartLength)
        }

        updateCartDisplay()
    }, [cartLength]);

    function logout() {
        removeCookie("username")
        removeCookie("role")
        removeCookie("accessToken")
        removeCookie("email")
        setCartDisplay(0)
        nav("/")
    }

    function searchHandler() {
        const input = document.getElementById("searchInput").value
        nav("/search?name=" + input)
    }

    return (
        <div className="container-fluid sticky-top bg-white">
            <div className="row">
                <Link className="col-2 px-3 text-decoration-none" to={"/"}>
                    <div className="row p-0">
                        <div className="col p-0">
                            <img style={{maxHeight: "100px"}}
                                 src="https://firebasestorage.googleapis.com/v0/b/movie-ticket-f0285.appspot.com/o/logo2-removebg-preview.png?alt=media&token=1c44dede-2227-477f-a2d9-76f4c9dbc09e"
                                 alt="error"/>
                        </div>
                        <div className="col-6 row align-items-center">
                            <h1 className="madimi-one-regular main-color d-none d-lg-block">VapeCloudz</h1>
                        </div>
                    </div>
                </Link>
                <div className="col mt-2">
                    <nav className="navbar navbar-light navbar-expand-xl">
                        <div className="container-fluid">
                            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars main-color"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav mx-auto">
                                    <Link to={"/search?category_id=1"} className="nav-item nav-link">E-Liquid</Link>
                                    <Link to={"/search?category_id=2"} className="nav-item nav-link">Disposable
                                        Vapes</Link>
                                    <Link to={"/search?category_id=3"} className="nav-item nav-link">Vape Kits</Link>
                                    <Link to={"/"} className="nav-item nav-link">Pod Kits</Link>
                                    <Link to={"/"} className="nav-item nav-link">Tanks</Link>
                                    <Link to={"/search?category_id=4"} className="nav-item nav-link">Pods</Link>
                                    <Link to={"/"} className="nav-item nav-link">Coils</Link>
                                    <div className="nav-item dropdown">
                                        <button className="nav-link dropdown-toggle"
                                                data-bs-toggle="dropdown">Accessories
                                        </button>
                                        <div className="dropdown-menu rounded">
                                            <button className="dropdown-item">Batteries</button>
                                            <button className="dropdown-item">DIY Kit</button>
                                            <button className="dropdown-item">Cotton Wick</button>
                                        </div>
                                    </div>
                                </div>
                                {cookie.role != null
                                    ? cookie.role.includes("ADMIN")
                                        ?
                                        <button className="btn btn-outline-secondary text-light main-bg rounded-5 me-3">
                                            Admin Panel
                                        </button>
                                        : null
                                    : null}
                                {cookie.username != null
                                    ?
                                    <div className="nav-item dropdown">
                                        <i className="fas fa-user fa-2x dropdown-toggle header-login-icon text-warning"
                                           aria-expanded="false"
                                           data-bs-toggle="dropdown"/>
                                        <div className="dropdown-menu dropdown-menu-end rounded mt-3">
                                            <button className="dropdown-item" onClick={logout}>Logout</button>
                                        </div>
                                    </div>
                                    :
                                    <Link to={"/login"} className="my-auto">
                                        <i className="fas fa-user fa-2x main-color"></i>
                                    </Link>
                                }
                                <Link className="text-decoration-none" to={"/cart"}>
                                    <i className="fa fa-shopping-bag fa-2x main-color mx-3"/>
                                    {cartDisplay < 1 ?
                                        null : <span className={styles.itemCount}>{cartDisplay}</span>}
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <div className="row g-1 mb-2">
                        <div className="col"></div>
                        <div className="col-5">
                            <input type="text" className="form-control" id="searchInput"/>
                        </div>
                        <div className="col">
                            <button onClick={(event) => {
                                event.preventDefault()
                                searchHandler()
                            }} className="btn btn-outline-secondary main-bg text-light">Search
                            </button>
                        </div>
                        <div className="col-1 text-end me-3 d-none d-xl-block">
                            {cookie.username == null ? null :
                                <h2 className="user-select-none text-warning p-0 m-0">{cookie.username}</h2>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}