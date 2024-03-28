import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import Swal from "sweetalert2";
import {login, register} from "../service/UserService";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export function SignupForm() {
    const [cookies, setCookie, removeCookie] = useCookies()
    const navigate = useNavigate()
    const initValue = {
        username: "",
        birthday: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const validationObject = {
        username: Yup.string().required().min(2).max(255),
        birthday: Yup.date().required(),
        password: Yup.string().required().min(6).max(255),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
    }

    async function submitRegister(data) {
        delete data.confirmPassword
        console.log(data)
        Swal.fire({
            title: "Creating new account...",
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
            }
        })
        const result = await register(data)
        Swal.close()
        if (result.status < 400) {
            let timerInterval;
            Swal.fire({
                title: "New account created!",
                html: "Returning to home page... <b></b>s.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}`;
                    }, 100);
                },
                willClose: async () => {
                    clearInterval(timerInterval);
                    const loginData = {
                        "email": data.email,
                        "password": data.password
                    }
                    const result = await login(loginData)
                    const userLoginData = result.data
                    setCookie("username", userLoginData.username)
                    setCookie("role", userLoginData.role)
                    setCookie("accessToken", userLoginData.accessToken)
                    navigate("/")
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });
        } else {
            await Swal.fire({
                icon: "error",
                title: "Unknown error!",
            });
        }
    }

    return (
        <>
            <div className="container">
                <div className="row gx-5">
                    <div className="col"></div>
                    <div className="col-5">
                        <Formik initialValues={initValue} validationSchema={Yup.object(validationObject)}
                                onSubmit={async (data) => {
                                    await submitRegister(data)
                                }}>
                            <Form>
                                <h2>Create new account</h2>
                                <hr/>
                                <p>Personal Information</p>
                                <div className="form-floating mb-3">
                                    <Field name="username" className="form-control rounded-4" id="floatingInput"/>
                                    <label htmlFor="floatingInput">User Name*</label>
                                    <ErrorMessage className="text-danger" name="username" component="p"/>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field name="birthday" type="date" className="form-control rounded-4"
                                           id="floatingPassword"/>
                                    <label form="floatingPassword">Day of Birth*</label>
                                    <ErrorMessage className="text-danger" name="birthday" component="p"/>
                                </div>

                                <hr/>
                                <p>Sign-in Information</p>
                                <div className="form-floating mb-3">
                                    <Field name="email" type="email" className="form-control rounded-4"
                                           id="floatingInput"/>
                                    <label htmlFor="floatingInput">Email address*</label>
                                    <ErrorMessage className="text-danger" name="email" component="p"/>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field name="password" type="password" className="form-control rounded-4"
                                           id="floatingPassword"/>
                                    <label form="floatingPassword">Password*</label>
                                    <ErrorMessage className="text-danger" name="password" component="p"/>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field name="confirmPassword" type="password" className="form-control rounded-4"
                                           id="floatingConfirmPassword"/>
                                    <label form="floatingConfirmPassword">Confirm Password*</label>
                                    <ErrorMessage className="text-danger" name="confirmPassword" component="p"/>
                                </div>
                                <div className="col">
                                    <button
                                        type="submit"
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