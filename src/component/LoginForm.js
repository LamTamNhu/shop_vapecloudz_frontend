import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {checkDuplicated, login} from "../service/UserService";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import * as Yup from "yup";
import Swal from "sweetalert2";

export function LoginForm({reloadCart}) {
    const [cookies, setCookie, removeCookie] = useCookies()
    const [isLoginFail, setIsLoginFail] = useState(false)
    const nav = useNavigate()

    useEffect(() => {
        function checkLogin() {
            if (cookies.accessToken != null) {
                nav("/")
            }
        }

        checkLogin()
    }, []);
    const initValue = {
        email: "",
        password: ""
    }
    const validationObject = {
        email: Yup.string().required().test(
            'checkEmailUnique',
            'No account with this email!',
            async function validateValue(value) {
                try {
                    const result = await checkDuplicated("", value)
                    return result.data
                } catch (e) {
                    await Swal.fire({
                            icon: "error",
                            title: "Email checking error, can't connect to server!"
                        }
                    )
                }
            }
        )
    }

    return (
        <div className="container">
            <div className="row gx-5">
                <div className="col"></div>
                <div className="col-5">
                    <Formik initialValues={initValue} validationSchema={Yup.object(validationObject)}
                            onSubmit={async (data) => {
                                const result = await login(data)
                                if (result.status < 400) {
                                    const loginData = result.data
                                    setCookie("email", loginData.email)
                                    setCookie("username", loginData.username)
                                    setCookie("role", loginData.role)
                                    setCookie("accessToken", loginData.accessToken)
                                    nav(0)
                                } else {
                                    if (result.status === 403) {
                                        await Swal.fire({
                                                icon: "warning",
                                                title: "This account is banned!"
                                            }
                                        )
                                        setIsLoginFail(false)
                                        return
                                    }
                                    setIsLoginFail(true)
                                }
                            }}>
                        <Form>
                            <h2>Login</h2>
                            <h5>Registered Customers</h5>
                            <hr/>
                            <p>If you have an account, sign in with your email address.</p>
                            <div className="form-floating mb-3">
                                <Field name="email" type="email" className="form-control rounded-4" id="floatingInput"/>
                                <label htmlFor="floatingInput">Email address</label>
                                <ErrorMessage className="text-danger" name="email" component="p"/>
                            </div>
                            <div className="form-floating mb-3">
                                <Field name="password" type="password" className="form-control rounded-4"
                                       id="floatingPassword"/>
                                <label form="floatingPassword">Password</label>
                            </div>
                            <div className="col">
                                <button type="submit"
                                        className="btn btn-outline-secondary main-bg text-light rounded-5 btn-lg w-50">Login
                                </button>
                            </div>
                            {isLoginFail ? <p className="text-danger">Wrong password!</p> : null}
                        </Form>
                    </Formik>
                </div>
                <div className="col-5">
                    <h2>Sign up</h2>
                    <h5>New Customers</h5>
                    <hr/>
                    <p>Creating an account has many benefits: check out faster, keep more than one address, track orders
                        and more.</p>
                    <div className="col">
                        <Link to={"/signup"} className="btn btn-dark text-light rounded-5 btn-lg w-50">Create new
                            account</Link>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}
