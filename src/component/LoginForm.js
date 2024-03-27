import {Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import {login} from "../service/UserService";
import {useState} from "react";
import Cookies from "universal-cookie";

export function LoginForm() {
    const cookie = new Cookies()
    const [isLoginFail, setIsLoginFail] = useState(false)
    const initValue = {
        email: "",
        password: ""
    }
    return (
        <div className="container">
            <div className="row gx-5">
                <div className="col"></div>
                <div className="col-5">
                    <Formik initialValues={initValue} onSubmit={async (data) => {
                        const result = await login(data)
                        console.log(result)
                        if (result.status < 400) {
                            const loginData = result.data
                            cookie.set("accessToken", loginData.accessToken)
                            cookie.set("username", loginData.username)
                            cookie.set("role", loginData.role)
                        } else {
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
                            </div>
                            <div className="form-floating mb-3">
                                <Field name="password" type="password" className="form-control rounded-4"
                                       id="floatingPassword"/>
                                <label form="floatingPassword">Password</label>
                            </div>
                            <div className="col">
                                <button
                                    className="btn btn-outline-secondary main-bg text-light rounded-5 btn-lg w-50">Login
                                </button>
                            </div>
                            {isLoginFail ? <p className="text-danger">Wrong email or password!</p> : null}

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
