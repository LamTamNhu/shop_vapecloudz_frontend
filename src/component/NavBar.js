import '../css/navbar.css'
import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <img className="col-2"
                         src="https://firebasestorage.googleapis.com/v0/b/movie-ticket-f0285.appspot.com/o/logo2-removebg-preview.png?alt=media&token=1c44dede-2227-477f-a2d9-76f4c9dbc09e"
                         alt="error" style={{maxWidth: "160px", maxHeight: "132px"}}/>
                    <div className="col">
                        <div className="container topbar main-bg d-none d-lg-block">
                            <div className="d-flex justify-content-between">
                                <div className="top-info ps-2">
                                    <small className="me-3"><i
                                        className="fas fa-map-marker-alt me-2 text-secondary"></i> <a
                                        href="#" className="text-white">123 Street, New York</a></small>
                                    <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a
                                        href="#"
                                        className="text-white">Email@Example.com</a></small>
                                </div>
                                <div className="top-link pe-2">
                                    <a href="#" className="text-white"><small className="text-white mx-2">Privacy
                                        Policy</small>/</a>
                                    <a href="#" className="text-white"><small className="text-white mx-2">Terms of
                                        Use</small>/</a>
                                    <a href="#" className="text-white"><small className="text-white ms-2">Sales and
                                        Refunds</small></a>
                                </div>
                            </div>
                        </div>
                        <div className="container px-0">
                            <nav className="navbar navbar-light bg-white navbar-expand-xl">
                                <Link to={"/"} className="navbar-brand"><h1
                                    className="madimi-one-regular main-color">VapeCloudz</h1></Link>
                                <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarCollapse">
                                    <span className="fa fa-bars main-color"></span>
                                </button>
                                <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                                    <div className="navbar-nav mx-auto">
                                        <Link to={"/"} className="nav-item nav-link">E-Liquid</Link>
                                        <Link to={"/"} className="nav-item nav-link">Disposable Vapes</Link>
                                        <Link to={"/"} className="nav-item nav-link">Vape Kits</Link>
                                        <Link to={"/"} className="nav-item nav-link">Pod Kits</Link>
                                        <Link to={"/"} className="nav-item nav-link">Tanks</Link>
                                        <Link to={"/"} className="nav-item nav-link">Pods</Link>
                                        <Link to={"/"} className="nav-item nav-link">Coils</Link>
                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle"
                                               data-bs-toggle="dropdown">Accessories</a>
                                            <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                                <a href="cart.html" className="dropdown-item">Cart</a>
                                                <a href="chackout.html" className="dropdown-item">Chackout</a>
                                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                                <a href="404.html" className="dropdown-item">404 Page</a>
                                            </div>
                                        </div>
                                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                                    </div>
                                    <div className="d-flex m-3 me-0">
                                        <button
                                            className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                                            data-bs-toggle="modal" data-bs-target="#searchModal"><i
                                            className="fas fa-search main-color"></i></button>
                                        <a href="#" className="position-relative me-4 my-auto">
                                            <i className="fa fa-shopping-bag fa-2x main-color"></i>
                                            <span
                                                className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                                                style={{
                                                    top: "-5px",
                                                    left: "15px",
                                                    height: "20px",
                                                    minWidth: "20px"
                                                }}>3</span>
                                        </a>
                                        <a href="#" className="my-auto">
                                            <i className="fas fa-user fa-2x main-color"></i>
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search products</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control p-3" aria-describedby="search-icon-1"/>
                                <button id="search-icon-1" className="input-group-text p-3"><i
                                    className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}