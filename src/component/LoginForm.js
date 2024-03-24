import {Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";

export function LoginForm() {
    const initValue = {
        email: "",
        password: ""
    }
    return (
        <div className="container">
            <div className="row gx-5">
                <div className="col"></div>
                <div className="col-5">
                    <Formik initialValues={initValue} onSubmit={(data) => {
                        console.log(data)
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
                                <Field name="password" type="password" className="form-control rounded-4" id="floatingPassword"/>
                                <label form="floatingPassword">Password</label>
                            </div>
                            <div className="col">
                                <button className="btn btn-outline-secondary main-bg text-light rounded-5 btn-lg w-50">Login</button>
                            </div>

                        </Form>
                    </Formik>
                </div>
                <div className="col-5">
                    <h2>Sign up</h2>
                    <h5>New Customers</h5>
                    <hr/>
                    <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                    <div className="col">
                        <Link to={"/signup"} className="btn btn-dark text-light rounded-5 btn-lg w-50">Create new account</Link>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}
