import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {editCart, getCart} from "../service/ItemService";
import {useCookies} from "react-cookie";
import Swal from "sweetalert2";
import {PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";
import {BeatLoader, CircleLoader, FadeLoader} from "react-spinners";
import {captureOrderBackEnd, createOrderBackEnd} from "../service/CheckOutService";

export function Cart({reloadCart}) {

    const [cart, setCart] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies([]);
    const [subTotal, setSubTotal] = useState(0)
    const [isUpdatingPrice, setIsUpdatingPrice] = useState(false)
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
        function doneLoading() {
            setIsUpdatingPrice(false)
        }

        doneLoading()
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
            setIsUpdatingPrice(true)
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

    async function createOrder(totalValue) {
        const result = await createOrderBackEnd({totalPrice: totalValue})
        if (result.status === 200) {
            console.log(result.data)
            return result.data
        }
    }

    async function onApprove(rawData) {
        const data = {orderId: rawData.orderID}
        const result = await captureOrderBackEnd(data)
        if (result.status === 200) {
            console.log("succeed!")
            Swal.fire(
                {
                    icon: "success",
                    title: "Item purchase succeed!"
                })
            return result.data
        }
    }

    function onCancelOrder() {
        console.log("cancel")
        Toast.fire(
            {
                icon: "error",
                title: "Payment cancel!"
            })
    }

    return (
        <>
            {subTotal === 0 ?
                <h2 className="text-danger mt-3 text-center"> Cart is empty...</h2> :
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
                                        {isPending || isUpdatingPrice ?
                                            <BeatLoader color="#36d7b7"/> :
                                            <PayPalButtons
                                                style={{layout: "vertical", shape: "pill"}}
                                                createOrder={async () => await createOrder(subTotal)}
                                                onApprove={onApprove}
                                                onCancel={onCancelOrder}
                                                onError={onCancelOrder}
                                            />}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="mt-5 mt-lg-0">
                                <div className="card border shadow-none">
                                    <div className="card-header bg-transparent border-bottom py-3 px-4">
                                        <h5 className="font-size-16 mb-0">Order Summary </h5>
                                    </div>
                                    <div className="card-body p-4 pt-2">

                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <tbody>
                                                <tr>
                                                    <td>Sub Total :</td>
                                                    <td className="text-end fw-bold">{subTotal}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}