import {Link, useNavigate, useParams} from "react-router-dom";
import Slider from "react-slick";
import {useEffect, useState} from "react";
import {findItemById} from "../service/ItemService";
import Swal from "sweetalert2";
import {FadeLoader} from "react-spinners";

export default function ItemDetail() {
    const params = useParams()
    const [item, setItem] = useState(null)
    const nav = useNavigate()
    const setting = {
        arrows: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
    }

    useEffect(() => {
        async function fetchApi() {
            const result = await findItemById(params.id)
            if (result.status === 200) {
                if (!result.data.isDeleted) {
                    setItem(result.data)
                    return
                }
            }
            await Swal.fire({
                title: "Product removed!",
                icon: "error"
            }).then(() => nav("/"));
        }

        fetchApi()
    }, []);
    return (
        <>
            {item == null
                ? <FadeLoader className="mx-auto"/>
                : <div className="container">
                    <div className="row">
                        <div className="col"/>
                        <div className="col-5">
                            <Slider {...setting}>
                                <div>
                                    <img
                                        src="https://cdn.vapestore.co.uk/media/catalog/product/cache/312af16b4230f9639b105af4a9030f8d/s/m/smok-nord-gt-kit-black-gun-metal.jpg"
                                        alt="what the hoi"/>
                                </div>
                                <div>
                                    <img
                                        src="https://cdn.vapestore.co.uk/media/catalog/product/cache/312af16b4230f9639b105af4a9030f8d/s/m/smok-nord-gt-kit-black-gun-metal.jpg"
                                        alt="what the hoi"/>
                                </div>
                                <div>
                                    <img
                                        src="https://cdn.vapestore.co.uk/media/catalog/product/cache/312af16b4230f9639b105af4a9030f8d/s/m/smok-nord-gt-kit-black-gun-metal.jpg"
                                        alt="what the hoi"/>
                                </div>
                                <div>
                                    <img
                                        src="https://cdn.vapestore.co.uk/media/catalog/product/cache/312af16b4230f9639b105af4a9030f8d/s/m/smok-nord-gt-kit-black-gun-metal.jpg"
                                        alt="what the hoi"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="col-5 ms-5">
                            <h2>{item.name}</h2>
                            <p className="text-success fw-bold">IN STOCK</p>
                            <h3 className="text-danger fw-bold">£29.99</h3>
                            <p className="fw-bold">Please Choose Colour</p>
                            <div className="input-group quantity mb-5 w-25">
                                <div className="input-group-btn">
                                    <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control form-control-sm text-center border-0"
                                       value="1"/>
                                <div className="input-group-btn">
                                    <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-outline-dark btn-lg">ADD TO CART</button>
                        </div>
                        <div className="col"/>
                    </div>
                    <ul className="nav nav-tabs my-5" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link fs-3 fw-bold active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane" type="button" role="tab"
                                    aria-controls="home-tab-pane"
                                    aria-selected="true">Description
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link fs-3 fw-bold" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane" type="button" role="tab"
                                    aria-controls="profile-tab-pane" aria-selected="false">User Reviews
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                             aria-labelledby="home-tab" tabIndex="0">
                            <p>{item.description}</p>
                        </div>
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                             aria-labelledby="profile-tab"
                             tabIndex="0">
                            <div className="mb-5">
                                <div className="d-flex align-items-center pe-5">
                                    <h2 className="me-3">4.9</h2>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-secondary"></i>
                                </div>
                                <p className="fst-italic">Based on 3 reviews</p>
                            </div>

                            <div className="border border-3 rounded-4 p-3 mb-3">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>John Smith</span>
                                    <span>24/03/2024</span>
                                </div>
                                <div className="d-flex pe-5">
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-secondary"></i>
                                </div>
                                <hr/>
                                <p className="mb-3 fw-bold">Great pod</p>
                                <p className="mb-5  format-content-body">I was delighted when these came out. The
                                    crystal
                                    plus
                                    is an inexpensive and simple
                                    alternative to disposables, but the prefilled pods limited choice and got expensive.
                                    These
                                    are the solution and they are great! No leaks and easily vape 20ml+ of liquid.</p>
                                <Link to={""} className="text-decoration-none text-secondary">Vaporesso Xros Pro</Link>
                            </div>
                            <div className="border border-3 rounded-4 p-3 mb-3">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>John Smith</span>
                                    <span>24/03/2024</span>
                                </div>
                                <div className="d-flex pe-5">
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-secondary"></i>
                                </div>
                                <hr/>
                                <p className="mb-3 fw-bold">Great pod</p>
                                <p className="mb-5  format-content-body">I was delighted when these came out. The
                                    crystal
                                    plus
                                    is an inexpensive and simple
                                    alternative to disposables, but the prefilled pods limited choice and got expensive.
                                    These
                                    are the solution and they are great! No leaks and easily vape 20ml+ of liquid.</p>
                                <Link to={""} className="text-decoration-none text-secondary">Vaporesso Xros Pro</Link>
                            </div>
                            <div className="border border-3 rounded-4 p-3 mb-3">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>John Smith</span>
                                    <span>24/03/2024</span>
                                </div>
                                <div className="d-flex pe-5">
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-secondary"></i>
                                </div>
                                <hr/>
                                <p className="mb-3 fw-bold">Great pod</p>
                                <p className="mb-5  format-content-body">I was delighted when these came out. The
                                    crystal
                                    plus
                                    is an inexpensive and simple
                                    alternative to disposables, but the prefilled pods limited choice and got expensive.
                                    These
                                    are the solution and they are great! No leaks and easily vape 20ml+ of liquid.</p>
                                <Link to={""} className="text-decoration-none text-secondary">Vaporesso Xros Pro</Link>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}