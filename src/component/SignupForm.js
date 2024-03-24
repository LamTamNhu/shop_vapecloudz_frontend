import {Field, Form, Formik} from "formik";

export function SignupForm() {
    const initValue = {
        username: "",
        birthday: "",
        email:"",
        password:""
    }
    return (
        <>
            <div className="container">
                <div className="row gx-5">
                    <div className="col"></div>
                    <div className="col-5">
                        <Formik initialValues={initValue} onSubmit={(data) => {
                            console.log(data)
                        }}>
                            <Form>
                                <h2>Create new account</h2>
                                <hr/>
                                <p>Personal Information</p>
                                <div className="form-floating mb-3">
                                    <Field name="username" className="form-control rounded-4" id="floatingInput"/>
                                    <label htmlFor="floatingInput">User Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field type="date" className="form-control rounded-4" id="floatingPassword"/>
                                    <label form="floatingPassword">Day of Birth</label>
                                </div>

                                <hr/>
                                <p>Sign-in Information</p>
                                <div className="form-floating mb-3">
                                    <Field name="email" type="email" className="form-control rounded-4" id="floatingInput"/>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field name="password" type="password" className="form-control rounded-4" id="floatingPassword"/>
                                    <label form="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field name="password" type="password" className="form-control rounded-4" id="floatingConfirmPassword"/>
                                    <label form="floatingConfirmPassword">Confirm Password</label>
                                </div>
                                <div className="col">
                                    <button
                                        className="btn btn-outline-secondary main-bg text-light rounded-5 btn-lg w-50">Create
                                        account
                                    </button>
                                </div>

                            </Form>
                        </Formik>
                    </div>
                    <div className="col"></div>
                </div>

            </div>
        </>
    )
}