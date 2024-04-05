import axios from "axios";

// axios.defaults.withCredentials = true
export async function login(data) {
    try {
        return await axios.post("http://localhost:8080/api/auth/login", data)
    } catch (e) {
        return e.response
    }
}

export async function register(data) {
    try {
        return await axios.post("http://localhost:8080/api/auth/register", data)
    } catch (e) {
        return e.response
    }
}

export async function checkDuplicated(username, email) {
    try {
        return await axios.get("http://localhost:8080/api/auth/duplicated?email=" + email + "&username=" + username)
    } catch (e) {
        return e.response
    }
}

