import {Link} from "react-router-dom";
import {useState} from "react";
import {useCookies} from "react-cookie";

export function Header() {
    const [cookie, setCookie, removeCookie] = useCookies();

    function logout() {
        removeCookie("username")
        removeCookie("role")
        removeCookie("accessToken")
    }

    return (
        <div className="container-fluid sticky-top bg-white">
            <div className="row">
                <Link className="col-1 d-flex align-items-center p-0" to={"/"}>
                    <img className="img-fluid"
                         src="https://firebasestorage.googleapis.com/v0/b/movie-ticket-f0285.appspot.com/o/logo2-removebg-preview.png?alt=media&token=1c44dede-2227-477f-a2d9-76f4c9dbc09e"
                         alt="error"/>
                </Link>
                <div className="col">
                    <nav className="navbar navbar-light navbar-expand-xl">
                        <div className="container-fluid">
                            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars main-color"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <Link to={"/"} className="navbar-brand">
                                    <h1 className="madimi-one-regular main-color">VapeCloudz</h1>
                                </Link>
                                <div className="navbar-nav mx-auto">
                                    <Link to={"/"} className="nav-item nav-link">E-Liquid</Link>
                                    <Link to={"/"} className="nav-item nav-link">Disposable Vapes</Link>
                                    <Link to={"/"} className="nav-item nav-link">Vape Kits</Link>
                                    <Link to={"/"} className="nav-item nav-link">Pod Kits</Link>
                                    <Link to={"/"} className="nav-item nav-link">Tanks</Link>
                                    <Link to={"/"} className="nav-item nav-link">Pods</Link>
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
                                        ? <button className="btn btn-outline-secondary text-light main-bg rounded-5">
                                            Admin Panel
                                        </button>
                                        : null
                                    : null}
                                <Link to={"/cart"}>
                                    <i className="fa fa-shopping-bag fa-2x main-color mx-3"></i>
                                </Link>
                                {cookie.username != null
                                    ?
                                    <div className="nav-item dropdown">
                                        <i className="fas fa-user fa-2x dropdown-toggle header-login-icon text-warning"
                                           aria-expanded="false"
                                           data-bs-toggle="dropdown"/>
                                        <div className="dropdown-menu dropdown-menu-end rounded mt-3">
                                            <p className="user-select-none fw-bold fs-3 text-warning text-center">{cookie.username}</p>
                                            <hr className="mt-0"/>
                                            <button className="dropdown-item" onClick={logout}>Logout</button>
                                        </div>
                                    </div>
                                    :
                                    <Link to={"/login"} className="my-auto">
                                        <i className="fas fa-user fa-2x main-color"></i>
                                    </Link>
                                }
                            </div>
                        </div>
                    </nav>
                    <form className="nav-item">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" aria-label="Recipient's username"
                                   aria-describedby="button-addon2"/>
                            <button className="btn btn-outline-secondary main-bg text-light" type="button"
                                    id="button-addon2">Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}