import axios from "axios";

// axios.defaults.withCredentials = true

export async function login(data) {
    try {
        return await axios.post("http://localhost:8080/api/auth/login", data)
    } catch (e) {
        return e.response
    }
}