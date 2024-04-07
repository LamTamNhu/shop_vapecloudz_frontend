import {Link, useNavigate, useParams} from "react-router-dom";
import Slider from "react-slick";
import {useEffect, useState} from "react";
import {findItemById} from "../service/ItemService";
import Swal from "sweetalert2";
import {FadeLoader} from "react-spinners";
import {useCookies} from "react-cookie";

export default function ItemDetail({updateCart}) {
    const [cookie, setCookie, removeCookie] = useCookies();
    const params = useParams()
    const [item, setItem] = useState(null)
    const [selectedVariant, setSelectedVariant] = useState(null)
    const [amount, setAmount] = useState(1)
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
                title: "Product not found!",
                icon: "error"
            }).then(() => nav("/"));
        }

        fetchApi()
    }, []);

    function handleSelected(variant) {
        if (selectedVariant === variant) {
            setSelectedVariant(null)
            return
        }
        setSelectedVariant(variant)
    }

    function handleAmountOnclick(isPlus) {
        if (isPlus) {
            setAmount(amount + 1)
        } else {
            if (amount <= 1) {
                return
            }
            setAmount(amount - 1)
        }
    }

    function addToCart() {
        if (cookie.email == null) {
            nav("/login")
            return
        }
        updateCart(selectedVariant.id, amount)
    }

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
                                    <img className="img-fluid" src={item.itemDTO.imageUrl} alt="..."/>
                                </div>
                                {item.itemVariantDTOS.map((variant) => (
                                    <div key={variant.id}>
                                        <img className="img-fluid" src={variant.itemImage.url} alt="..."/>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="col-5 ms-5">
                            <h2>{item.itemDTO.name}</h2>
                            <p className="text-success fw-bold">IN STOCK</p>
                            <h3 className="text-danger fw-bold">£29.99</h3>
                            <span className="fw-bold">Please Choose Colour </span>
                            <span
                                className="text-danger ms-3 fw-bold">{selectedVariant == null ? null : selectedVariant.name}</span>
                            <div className="row row-cols-6 my-3 gx-2">
                                {item.itemVariantDTOS.map((variant) => (
                                    <div onClick={(event) => {
                                        handleSelected(variant)
                                    }} className="col" key={variant.id}>
                                        <button className="btn p-0">
                                            <img className={
                                                variant === selectedVariant ? "img-fluid border border-2 rounded-3 border-danger" : "img-fluid border border-2 rounded-3"
                                            }
                                                 src={variant.itemImage.url}
                                                 alt=""/>
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="input-group quantity mb-5 w-25">
                                <div className="input-group-btn">
                                    <button onClick={() => handleAmountOnclick(false)}
                                            className="btn btn-sm btn-minus rounded-circle bg-light border">
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control form-control-sm text-center border-0"
                                       value={amount}/>
                                <div className="input-group-btn">
                                    <button onClick={() => handleAmountOnclick(true)}
                                            className="btn btn-sm btn-plus rounded-circle bg-light border">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            {selectedVariant == null ?
                                <button className="btn btn-secondary btn-lg" disabled>ADD TO CART</button> :
                                <button onClick={() => addToCart()} className="btn btn-dark btn-lg">ADD TO
                                    CART</button>}
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
                            <p>{item.itemDTO.description}</p>
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