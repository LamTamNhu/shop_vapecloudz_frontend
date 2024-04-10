import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {editCart, getCart} from "../service/ItemService";
import {useCookies} from "react-cookie";
import Swal from "sweetalert2";
import {PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";
import {BeatLoader, CircleLoader} from "react-spinners";

export function Cart({reloadCart}) {
    const [cart, setCart] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies([]);
    const [subTotal, setSubTotal] = useState(0)
    const [{isPending}] = usePayPalScriptReducer();
    const nav = useNavigate()
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast',
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
    })
    useEffect(() => {
        fetchApi()
    }, []);
    useEffect(() => {
        function log() {
            console.log("Updated total: " + subTotal)
        }
        log()
    }, [subTotal]);

    async function fetchApi() {
        if (cookie.accessToken == null || cookie.email == null) {
            nav("/login")
            return
        }
        const result = await getCart(cookie.email)
        if (result.status === 200) {
            setCart(result.data)
            let sum = 0
            result.data.forEach((item) => {
                sum += item.itemVariant.price * item.amount
            })
            setSubTotal(Number(sum.toFixed(2)))
        }
    }

    async function updateValue(id, item, isRemove) {
        const target = document.getElementById(id)
        if (target.value < 1 || isRemove) {
            const result = await Swal.fire({
                title: "Remove " + item.itemVariant.item.name + " from your cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, remove it!"
            })
            if (!result.isConfirmed) {
                target.value = 1
                return
            } else {
                await Toast.fire(
                    {
                        icon: "warning",
                        title: "Item removed"
                    }
                )
            }
        }
        const data = {
            cartId: item.id,
            amount: isRemove ? 0 : target.value,
        }
        await editCart(data)
        await fetchApi()
        await reloadCart()
    }

    const onCreateOrder = (data, actions) => {
        // replace this url with your server
        return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product ids and quantities
            body: JSON.stringify({
                cart: [
                    {
                        sku: "1blwyeo8",
                        quantity: 2,
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((order) => {
                // Your code here after create the order
                return order.id;

            });
    }
    const onApproveOrder = (data, actions) => {
        // replace this url with your server
        return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID,
            }),
        })
            .then((response) => response.json())
            .then((orderData) => {
                // Your code here after capture the order
            });
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        {cart.map((item) => (
                            <div className="card border shadow-none mb-3" key={item.id}>
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
                                                <p className="main-color mb-0 mt-1">{item.itemVariant.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mt-3">
                                                    <p className="text-secondary mb-2">Price</p>
                                                    <h5 className="mb-0 mt-2">${item.itemVariant.price}
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mt-3">
                                                    <p className="text-secondary mb-2">Quantity</p>
                                                    <input type="number" id={item.itemVariant.id}
                                                           onChange={async (event) =>
                                                               await updateValue(item.itemVariant.id, item)
                                                           }
                                                           className="form-control form-control-sm text-center w-50"
                                                           defaultValue={item.amount}/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mt-3">
                                                    <p className="text-secondary mb-2">Total</p>
                                                    <h5>${(item.itemVariant.price * item.amount).toFixed(2)}</h5>
                                                </div>
                                            </div>
                                            <div className="col-2 p-3 text-end">
                                                <a href={"#"}>
                                                    <i className="fa-solid fa-x fa-xl text-danger"
                                                       onClick={async (event) => {
                                                           await updateValue(item.itemVariant.id, item, true)
                                                       }}>
                                                    </i>
                                                </a>
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
                                <div className="text-end mt-2 mt-sm-0">
                                    {isPending || subTotal === 0 ?
                                        <BeatLoader color="#36d7b7"/> :
                                        <PayPalButtons
                                            style={{layout: "vertical"}}
                                            createOrder={(data, actions) => onCreateOrder(data, actions)}
                                            onApprove={(data, actions) => onApproveOrder(data, actions)}
                                        />}
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
                                                <td className="text-end">${subTotal}</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping Charge :</td>
                                                <td className="text-end">$ 25</td>
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