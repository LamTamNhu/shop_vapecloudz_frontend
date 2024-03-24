import {useParams} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Detail() {
    const param = useParams()
    const setting = {
        arrows: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
    }
    return (
        <>
            <div className="container">
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
                        <h2>Vaporesso Xros Pro</h2>
                        <p>The Smok Nord GT Pod Kit is an advanced, yet user-friendly vape device, ideal for DTL vaping
                            but can easily accommodate awesome MTL vaping. It features a long-lasting 2500mAh battery,
                            an adjustable power range of 5-80W, and comes with two RPM 3 coils for a versatile and
                            enjoyable vape.</p>
                        <p className="text-success fw-bold">IN STOCK</p>
                        <h3 className="text-danger fw-bold">£29.99</h3>
                        <p className="fw-bold">Please Choose Colour</p>
                        <div className="input-group quantity mb-5 w-25">
                            <div className="input-group-btn">
                                <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control form-control-sm text-center border-0" value="1"/>
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
                                data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
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
                         aria-labelledby="home-tab" tabIndex="0"><p>The Smok Nord GT Pod Kit is fantastic fusion of raw
                        power and convenience in a sleek and stylish
                        package. With the Nord GT, Smok has firmly propelled their classic and hugely influential pod
                        kit
                        into sub-ohm, DTL (direct-to-lung) territory, making it ideal for those who love rich flavours
                        and
                        dense, satisfying vapour.

                        This kit features an impressive 2500mAh built-in battery, ensuring ample power for long,
                        indulgent
                        vaping sessions and dependable all-day use. With a variable wattage of 5-80 watts, the Nord GT
                        caters to a diverse range of vaping styles, making it a versatile choice for both beginners and
                        seasoned vapers. The device simplifies operation with a straightforward five-click lock/unlock
                        mechanism. Its smart chipset automatically adjusts the power to match the coil in use, providing
                        an
                        optimal vaping experience every time.

                        For vapers who enjoy fine-tuning their sessions, manual wattage adjustment is available,
                        allowing
                        for precise control over vapour production and flavour intensity. Included in the kit is a
                        durable
                        2ml pod, designed for quick and clean side refilling. This pod is complemented by two
                        high-performance RPM 3 coils – a 0.15 Ohm coil for dense, flavourful clouds, and a 0.23 Ohm coil
                        for
                        a more flexible vaping experience that can accommodate 50/50 e-liquids as well as high-VG
                        e-liquids.
                        The coils' mesh design ensures rapid and even heating, extracting the best flavours from your
                        favourite e-liquids.

                        The Smok Nord GT is more than just a vaping device; it's a compact companion for on-the-go
                        vapers,
                        but one that doesn’t sacrifice performance or flavour for portability. Whether you're stepping
                        out
                        for the day or relaxing at home, the Smok Nord GT Pod Kit is your reliable partner for an
                        endlessly
                        enjoyable and satisfying vaping experience.

                        Features:

                        2500mAh Built-In Battery
                        Power Output: 5-80W
                        Smart Mode & Variable Wattage Mode
                        Ideal for DTL/Sub-Ohm Vaping
                        Multiple Safety Modes
                        2ml Side-Filling Pod
                        Removable RPM 3 Mesh Coils
                        12 Dazzling Styles to choose from

                        What’s in the Box:

                        1 x Smok Nord GT Device 80W
                        1 x Smok Nord GT Pod
                        1 x 0.15 Ohm RPM 3 Coil
                        1 x 0.23 Ohm RPM 3 Coil
                        1 x USB-C Cable User Manual

                        Please Note: To improve the performance and longevity of your new Coils, always prime them with
                        your
                        chosen e-liquid before inserting into your device 'Priming’ simply means wetting the exposed
                        cotton
                        or similar wicking material with e-liquid before use. This helps prevent dry hits and burning
                        the
                        coil should it fail to soak up e-liquid properly before firing the vape device. Once you've
                        primed
                        your pod, attached it to your device, allow to stand for 5-10 minutes before vaping.</p></div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                         tabIndex="0">...
                    </div>
                </div>


            </div>
        </>
    )
}