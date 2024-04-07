import {Link} from "react-router-dom";

export function Cart(cartData) {
    let cart = cartData.cart

    function handleAmountOnclick(isPlus) {
        if (isPlus) {
        } else {
        }

    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        {cart.map((item) => (
                            <div className="card border shadow-none mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-start border-bottom pb-3">
                                        <div className="me-4">
                                            <img src={item.itemVariant.itemImage.url} alt=""
                                                 className="avatar-lg rounded w-25"/>
                                        </div>
                                        <div className="flex-grow-1 align-self-center overflow-hidden">
                                            <div>
                                                <h5 className="text-truncate font-size-18">
                                                    <Link className="text-decoration-none text-dark"
                                                          to={`/product/${item.itemVariant.item.id}`}>
                                                        {item.itemVariant.item.name}
                                                    </Link>
                                                </h5>
                                                <p className="mb-0 mt-1">{item.itemVariant.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="mt-3">
                                                    <p className="text-secondary mb-2">Price</p>
                                                    <h5 className="mb-0 mt-2"><span className="text-secondary me-2"><del
                                                        className="font-size-16 fw-normal">$500</del></span>$450
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="mt-3">
                                                    <p className="text-secondary mb-2">Quantity</p>
                                                    <div className="input-group w-50">
                                                        <div className="input-group-btn">
                                                            <button onClick={() => handleAmountOnclick(false)}
                                                                    className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                                <i className="fa fa-minus"></i>
                                                            </button>
                                                        </div>
                                                        <input type="text"
                                                               className="form-control form-control-sm text-center border-0"
                                                               value={item.amount}/>
                                                        <div className="input-group-btn">
                                                            <button onClick={() => handleAmountOnclick(true)}
                                                                    className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                                <i className="fa fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="mt-3">
                                                    <p className="text-secondary mb-2">Total</p>
                                                    <h5>$900</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}

                        <div className="row my-4">
                            <div className="col-sm-6">
                                <a href="ecommerce-products.html" className="btn btn-link text-secondary">
                                    <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping </a>
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-end mt-2 mt-sm-0">
                                    <a href="ecommerce-checkout.html" className="btn btn-success">
                                        <i className="mdi mdi-cart-outline me-1"></i> Checkout </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="mt-5 mt-lg-0">
                            <div className="card border shadow-none">
                                <div className="card-header bg-transparent border-bottom py-3 px-4">
                                    <h5 className="font-size-16 mb-0">Order Summary <span
                                        className="float-end">#MN0124</span>
                                    </h5>
                                </div>
                                <div className="card-body p-4 pt-2">

                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <tbody>
                                            <tr>
                                                <td>Sub Total :</td>
                                                <td className="text-end">$ 780</td>
                                            </tr>
                                            <tr>
                                                <td>Discount :</td>
                                                <td className="text-end">- $ 78</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping Charge :</td>
                                                <td className="text-end">$ 25</td>
                                            </tr>
                                            <tr>
                                                <td>Estimated Tax :</td>
                                                <td className="text-end">$ 18.20</td>
                                            </tr>
                                            <tr className="bg-light">
                                                <th>Total :</th>
                                                <td className="text-end">
                                            <span className="fw-bold">
                                                $ 745.2
                                            </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}