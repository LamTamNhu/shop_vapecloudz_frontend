import {Link} from "react-router-dom";

export function Header() {
    return (
        <>
            <div className="container-fluid mb-3 sticky-top bg-white">
                <div className="row">
                    <Link className="col-2" to={"/"}>
                        <img style={{maxWidth: "200px"}}
                             src="https://firebasestorage.googleapis.com/v0/b/movie-ticket-f0285.appspot.com/o/logo2-removebg-preview.png?alt=media&token=1c44dede-2227-477f-a2d9-76f4c9dbc09e"
                             alt="error"/>
                    </Link>

                    <div className="col px-5">
                        <div className="container">
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
                                        <a href="#" className="position-relative me-4 my-auto">
                                            <Link to={"/cart"}>
                                                <i className="fa fa-shopping-bag fa-2x main-color"></i>
                                            </Link>
                                        </a>
                                        <Link to={"/login"} className="my-auto">
                                            <i className="fas fa-user fa-2x main-color"></i>
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <form>
                            <div className="input-group mb-3">
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
        </>
    )
}