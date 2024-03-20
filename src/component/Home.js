import slide_1 from "../images/banner-pc.jpg"
import slide_2 from "../images/2-2560x1110.jpg"
import slide_3 from "../images/real 2560.jpg"
import card_1 from "../images/freebaseee-1.webp"
import styles from "../css/home.module.css"

export function Home() {
    return (
        <>
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
            <div className="container mt-3" align="center">
                <h2 className="my-5 main-color">Shop by Category</h2>
                <div className="row">
                    <div className={`col ${styles.container}`} style={{overflow: "hidden"}}>
                        <img src={card_1} alt="..."/>
                    </div>
                    <div className={`col ${styles.container}`} style={{overflow: "hidden"}}>
                        <img src="https://utphampodsystem.com/wp-content/uploads/2024/01/freebaseee-2-1.png" alt="..."/>
                    </div>
                    <div className={`col ${styles.container}`} style={{overflow: "hidden"}}>
                        <img src="https://utphampodsystem.com/wp-content/uploads/2024/01/Pod.png" alt="..."/>
                    </div>
                    <div className={`col ${styles.container}`} style={{overflow: "hidden"}}>
                        <img src="https://utphampodsystem.com/wp-content/uploads/2024/01/saleee.png" alt="..."/>
                    </div>
                </div>
            </div>

            <div className="container mt-3" align="center">
                <h2 className="my-5 main-color">Bestsellers</h2>
                <div className="row row-cols-4 g-4">
                    <div className="card col border-0">
                        <img
                            src="https://utphampodsystem.com/wp-content/uploads/2024/03/kiotviet_199f4db8dc8ce439ecd2d843b5afaf23.png"
                            className="card-img-top card-img-bottom" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col border-0">
                        <img
                            src="https://utphampodsystem.com/wp-content/uploads/2024/03/kiotviet_199f4db8dc8ce439ecd2d843b5afaf23.png"
                            className="card-img-top card-img-bottom" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col border-0">
                        <img
                            src="https://utphampodsystem.com/wp-content/uploads/2024/03/kiotviet_199f4db8dc8ce439ecd2d843b5afaf23.png"
                            className="card-img-top card-img-bottom" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col border-0">
                        <img
                            src="https://utphampodsystem.com/wp-content/uploads/2024/03/kiotviet_199f4db8dc8ce439ecd2d843b5afaf23.png"
                            className="card-img-top card-img-bottom" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-warning main-bg text-light rounded">More</button>
            </div>
            <div className="container mt-3" align="center">
                <h2 className="my-5 main-color">New Arrivals</h2>
                <div className="row row-cols-4 g-4">
                    <div className="card col border-0">
                        <img
                            src="https://utphampodsystem.com/wp-content/uploads/2024/03/kiotviet_199f4db8dc8ce439ecd2d843b5afaf23.png"
                            className="card-img-top card-img-bottom" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col border-0">
                        <img
                            src="https://utphampodsystem.com/wp-content/uploads/2024/03/kiotviet_199f4db8dc8ce439ecd2d843b5afaf23.png"
                            className="card-img-top card-img-bottom" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col border-0">
                        <img
                            src="https://utphampodsystem.com/wp-content/uploads/2024/03/kiotviet_199f4db8dc8ce439ecd2d843b5afaf23.png"
                            className="card-img-top card-img-bottom" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col border-0">
                        <img
                            src="https://utphampodsystem.com/wp-content/uploads/2024/03/kiotviet_199f4db8dc8ce439ecd2d843b5afaf23.png"
                            className="card-img-top card-img-bottom" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-warning main-bg text-light rounded">More</button>
            </div>
            <div className="container mt-3" align="center">
                <h2 className="my-5 main-color">FAQs</h2>
                <div className="row row-cols-2 g-4">
                    <div className="col">
                        <h2>Will Vaping Help Me Quit Smoking?</h2>
                        <p>Vaping is an alternative for smoking that curbs your nicotine cravings without the hundreds
                            of harmful chemicals found in traditional cigarettes. Vaping is designed to be a safer
                            alternative to smoking that will help you quit smoking. For total beginners, we recommend
                            looking at pen style kits as they are simple to use and usually come with everything you
                            need to get started vaping. We also suggest looking at disposable vapes as they require no
                            set up and come ready to go straight away. If you’re looking for some more info and help
                            with getting started vaping, contact our customer care team.</p>
                    </div>
                    <div className="col">
                        <h2>Which E-Liquid Should I Use?</h2>
                        <p>E-Liquids come in loads of different flavours, formulations, and sizes. This means that you
                            have plenty of choice to find your favourite all-day vape flavour, however it can be
                            daunting to those that are just starting out. Certain kits work best with specific
                            e-liquids, and so it’s important to get the right e-liquid formulation. When it comes to
                            lower powered kits such as a lot of pod kits or pen kits, then high PG is the best e-liquid
                            to use, however for those wanting to use a higher powered kit, then high VG (also know as
                            sub ohm e-liquid) is what you’ll want. There is also the option to use 50/50 e-liquid which
                            is super versatile and can be used in almost any type of kit.</p>
                    </div>
                    <div className="col">
                        <h2>Which Vape Kit Should I Choose?</h2>
                        <p>The vape kit that is right for you is totally down to your personal preference when it comes
                            to convenience, performance, and nicotine strength choice. For those that are looking for a
                            kit that’s ease and simple to use, we recommend a refillable pod kit or pre-filled pod kit.
                            Disposable vapes are also a straightforward way to get into vaping as they come pre-filled,
                            pre-charged and ready to go straight out the box. If you’re looking for maximum flavour and
                            cloud production then a more advanced sub ohm style kit will be the one for you. These kits
                            range from all-in-one kits that come with everything you need, to more powerful box mods
                            that you can customise with different vape tanks and vape coils to provide you with an
                            unparalleled vaping experience.</p>
                    </div>
                    <div className="col">
                        <h2>How To Choose The Best E-Liquid Flavour</h2>
                        <p>Picking out e-liquids to try is one of the most fun parts of vaping, however it can feel
                            overwhelming with the huge range we have here at Vapestore. There isn’t really a “best”
                            e-liquid flavour as it’s totally down to each vaper’s personal preference. Some that have
                            made the switch from smoking often opt for a tobacco or a menthol flavour. Other people
                            prefer to go in a totally different direction and go for something fresh and fruity like
                            mango, or raspberry sherbet. There are also some more unique flavour collections such as
                            bakery, dessert, or beverages for example. All these flavours are available in a wide
                            variety of strengths so you can find the perfect e-liquid for you.</p>
                    </div>
                    <div className="col">
                        <h2>What Vape Coils Do I Need To Use?</h2>
                        <p>Vape kits require coils to use, however you need to make sure you’re getting the right coils for your kit. Most kits have coils that are specifically used for that exact kit, however some brands have a generic coil that can be used in multiple versions of their kit. Some pod kits come with inbuilt coils in the pods so once you can buy a pack of pods and have the coils already installed and ready to go. More advanced sub ohm kits usually require specific coils that fit with the kit’s tank. If you’re buying a disposable kit, they come with e-liquid prefilled and coils already in the kit so they’re ready to go straight out the box. We’ve created an easy-to-use coil finder so you can check which coil you need for your kit.</p>
                    </div>
                    <div className="col">
                        <h2>Will Vaping Help Me Quit Smoking?</h2>
                        <p>Vaping is an alternative for smoking that curbs your nicotine cravings without the hundreds
                            of harmful chemicals found in traditional cigarettes. Vaping is designed to be a safer
                            alternative to smoking that will help you quit smoking. For total beginners, we recommend
                            looking at pen style kits as they are simple to use and usually come with everything you
                            need to get started vaping. We also suggest looking at disposable vapes as they require no
                            set up and come ready to go straight away. If you’re looking for some more info and help
                            with getting started vaping, contact our customer care team.</p>
                    </div>
                </div>
            </div>

            {/*Footer*/}
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
                <div className="container py-5">
                    <div className="pb-4 mb-4">
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <h1 className="main-color mb-0">VapeCloudz</h1>
                                <p className="text-secondary mb-0">Good price with quality</p>
                            </div>
                            <div className="col-lg-8">
                                <div className="d-flex justify-content-end pt-3">
                                    <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i
                                        className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                                       href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                                       href=""><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i
                                        className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="main-color mb-3">Why People Like us!</h4>
                                <p className="mb-4">typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                                <a href="" className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read
                                    More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="main-color mb-3">Shop Info</h4>
                                <a className="btn-link" href="">About Us</a>
                                <a className="btn-link" href="">Contact Us</a>
                                <a className="btn-link" href="">Privacy Policy</a>
                                <a className="btn-link" href="">Terms & Condition</a>
                                <a className="btn-link" href="">Return Policy</a>
                                <a className="btn-link" href="">FAQs & Help</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="main-color mb-3">Account</h4>
                                <a className="btn-link" href="">My Account</a>
                                <a className="btn-link" href="">Shop details</a>
                                <a className="btn-link" href="">Shopping Cart</a>
                                <a className="btn-link" href="">Wishlist</a>
                                <a className="btn-link" href="">Order History</a>
                                <a className="btn-link" href="">International Orders</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="main-color mb-3">Contact</h4>
                                <p>Address: 1429 Netus Rd, NY 48247</p>
                                <p>Email: Example@gmail.com</p>
                                <p>Phone: +0123 4567 8910</p>
                                <p>Payment Accepted</p>
                                <img src="" className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Footer End*/}
        </>
    )
}