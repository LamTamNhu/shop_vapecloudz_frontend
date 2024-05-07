import slide_1 from "../images/banner-pc.jpg"
import slide_2 from "../images/2-2560x1110.jpg"
import slide_3 from "../images/real 2560.jpg"
import card_1 from "../images/freebaseee-1.webp"
import styles from "../css/home.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {searchItem} from "../service/ItemService";

export function Home() {
    const settings = {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true
    };
    const [newList, setNewList] = useState([])
    useEffect(() => {
        async function fetchApi() {
            const newListResult = await searchItem("?size=4")
            if (newListResult.status === 200) {
                setNewList(newListResult.data.content)
            }
        }

        fetchApi()
    }, []);
    return (
        <>
            {/*Main carousel*/}
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide_1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container-fluid featurs py-2">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-warning mb-3 mx-auto">
                                    <i className="fas fa-car-side fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Free Shipping</h5>
                                    <p className="mb-0">Free on order over $50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-warning mb-3 mx-auto">
                                    <i className="fas fa-user-shield fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Security Payment</h5>
                                    <p className="mb-0">100% security payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-warning mb-3 mx-auto">
                                    <i className="fas fa-exchange-alt fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>30 Day Return</h5>
                                    <p className="mb-0">30 day money guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-warning mb-3 mx-auto">
                                    <i className="fa fa-phone-alt fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>24/7 Support</h5>
                                    <p className="mb-0">Support every time fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Categories*/}
            <div className="container">
                <h2 className="my-5 main-color text-center">Shop by Category</h2>

                <div className="row">
                    <Link to={"/search?category_id=1"} className={`col ${styles.container}`}
                          style={{overflow: "hidden"}}>
                        <img src={card_1} alt="..."/>
                    </Link>
                    <Link to={"/search?category_id=2"} className={`col ${styles.container}`}
                          style={{overflow: "hidden"}}>
                        <img src="https://utphampodsystem.com/wp-content/uploads/2024/01/freebaseee-2-1.png" alt="..."/>
                    </Link>
                    <Link to={"/search?category_id=3"} className={`col ${styles.container}`}
                          style={{overflow: "hidden"}}>
                        <img src="https://utphampodsystem.com/wp-content/uploads/2024/01/Pod.png" alt="..."/>
                    </Link>
                    <Link to={"/search?category_id=4"} className={`col ${styles.container}`}
                          style={{overflow: "hidden"}}>
                        <img src="https://utphampodsystem.com/wp-content/uploads/2024/01/saleee.png" alt="..."/>
                    </Link>
                </div>
            </div>
            {/*:Products showcase*/}
            <div className="container mt-3">
                <h2 className="my-5 main-color text-center">New Arrivals</h2>
                <div className="row row-cols-4 g-4">
                    {newList.map((item) => (
                        <Link key={item.itemId} to={`/product/${item.itemId}`} className="text-decoration-none">
                            <div className={`card col border-0 ${styles.card}`}>
                                <img
                                    src={item.url}
                                    className="card-img-top card-img-bottom" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">{item.itemName}</p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-danger fs-5 fw-bold">{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <Link to={"/search"} className="row justify-content-center text-decoration-none">
                    <button type="button" className="col-1 btn btn-outline-warning main-bg text-light rounded">More
                    </button>
                </Link>
            </div>
            {/*Review carousel*/}
            <div className="slider-container container">
                <h2 className="my-5 main-color text-center">Latest user reviews</h2>
                <Slider {...settings}>
                    <div className="border border-3 rounded-4 p-3">
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
                        <p className="mb-5  format-content-body">I was delighted when these came out. The crystal
                            plus
                            is an inexpensive and simple
                            alternative to disposables, but the prefilled pods limited choice and got expensive.
                            These
                            are the solution and they are great! No leaks and easily vape 20ml+ of liquid.</p>
                        <Link to={""} className="text-decoration-none text-secondary">Vaporesso Xros Pro</Link>
                    </div>
                    <div className="border border-3 rounded-4 p-3">
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
                        <p className="mb-5  format-content-body">I was delighted when these came out. The crystal
                            plus
                            is an inexpensive and simple
                            alternative to disposables, but the prefilled pods limited choice and got expensive.
                            These
                            are the solution and they are great! No leaks and easily vape 20ml+ of liquid.</p>
                        <Link to={""} className="text-decoration-none text-secondary">Vaporesso Xros Pro</Link>
                    </div>
                    <div className="border border-3 rounded-4 p-3">
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
                        <p className="mb-5  format-content-body">I was delighted when these came out. The crystal
                            plus
                            is an inexpensive and simple
                            alternative to disposables, but the prefilled pods limited choice and got expensive.
                            These
                            are the solution and they are great! No leaks and easily vape 20ml+ of liquid.</p>
                        <Link to={""} className="text-decoration-none text-secondary">Vaporesso Xros Pro</Link>
                    </div>
                </Slider>
            </div>
            {/*FAQ*/}
            <div className="container mt-3" align="center">
                <h2 className="my-5 main-color">FAQs</h2>
                <div className="row row-cols-2 g-4">
                    <div className="col">
                        <h2>Will Vaping Help Me Quit Smoking?</h2>
                        <p>Vaping is an alternative for smoking that curbs your nicotine cravings without the
                            hundreds
                            of harmful chemicals found in traditional cigarettes. Vaping is designed to be a safer
                            alternative to smoking that will help you quit smoking. For total beginners, we
                            recommend
                            looking at pen style kits as they are simple to use and usually come with everything you
                            need to get started vaping. We also suggest looking at disposable vapes as they require
                            no
                            set up and come ready to go straight away. If you’re looking for some more info and help
                            with getting started vaping, contact our customer care team.</p>
                    </div>
                    <div className="col">
                        <h2>Which E-Liquid Should I Use?</h2>
                        <p>E-Liquids come in loads of different flavours, formulations, and sizes. This means that
                            you
                            have plenty of choice to find your favourite all-day vape flavour, however it can be
                            daunting to those that are just starting out. Certain kits work best with specific
                            e-liquids, and so it’s important to get the right e-liquid formulation. When it comes to
                            lower powered kits such as a lot of pod kits or pen kits, then high PG is the best
                            e-liquid
                            to use, however for those wanting to use a higher powered kit, then high VG (also know
                            as
                            sub ohm e-liquid) is what you’ll want. There is also the option to use 50/50 e-liquid
                            which
                            is super versatile and can be used in almost any type of kit.</p>
                    </div>
                    <div className="col">
                        <h2>Which Vape Kit Should I Choose?</h2>
                        <p>The vape kit that is right for you is totally down to your personal preference when it
                            comes
                            to convenience, performance, and nicotine strength choice. For those that are looking
                            for a
                            kit that’s ease and simple to use, we recommend a refillable pod kit or pre-filled pod
                            kit.
                            Disposable vapes are also a straightforward way to get into vaping as they come
                            pre-filled,
                            pre-charged and ready to go straight out the box. If you’re looking for maximum flavour
                            and
                            cloud production then a more advanced sub ohm style kit will be the one for you. These
                            kits
                            range from all-in-one kits that come with everything you need, to more powerful box mods
                            that you can customise with different vape tanks and vape coils to provide you with an
                            unparalleled vaping experience.</p>
                    </div>
                    <div className="col">
                        <h2>How To Choose The Best E-Liquid Flavour</h2>
                        <p>Picking out e-liquids to try is one of the most fun parts of vaping, however it can feel
                            overwhelming with the huge range we have here at Vapestore. There isn’t really a “best”
                            e-liquid flavour as it’s totally down to each vaper’s personal preference. Some that
                            have
                            made the switch from smoking often opt for a tobacco or a menthol flavour. Other people
                            prefer to go in a totally different direction and go for something fresh and fruity like
                            mango, or raspberry sherbet. There are also some more unique flavour collections such as
                            bakery, dessert, or beverages for example. All these flavours are available in a wide
                            variety of strengths so you can find the perfect e-liquid for you.</p>
                    </div>
                    <div className="col">
                        <h2>What Vape Coils Do I Need To Use?</h2>
                        <p>Vape kits require coils to use, however you need to make sure you’re getting the right
                            coils
                            for your kit. Most kits have coils that are specifically used for that exact kit,
                            however
                            some brands have a generic coil that can be used in multiple versions of their kit. Some
                            pod
                            kits come with inbuilt coils in the pods so once you can buy a pack of pods and have the
                            coils already installed and ready to go. More advanced sub ohm kits usually require
                            specific
                            coils that fit with the kit’s tank. If you’re buying a disposable kit, they come with
                            e-liquid prefilled and coils already in the kit so they’re ready to go straight out the
                            box.
                            We’ve created an easy-to-use coil finder so you can check which coil you need for your
                            kit.</p>
                    </div>
                    <div className="col">
                        <h2>Will Vaping Help Me Quit Smoking?</h2>
                        <p>Vaping is an alternative for smoking that curbs your nicotine cravings without the
                            hundreds
                            of harmful chemicals found in traditional cigarettes. Vaping is designed to be a safer
                            alternative to smoking that will help you quit smoking. For total beginners, we
                            recommend
                            looking at pen style kits as they are simple to use and usually come with everything you
                            need to get started vaping. We also suggest looking at disposable vapes as they require
                            no
                            set up and come ready to go straight away. If you’re looking for some more info and help
                            with getting started vaping, contact our customer care team.</p>
                    </div>
                </div>
            </div>
        </>
    )
}