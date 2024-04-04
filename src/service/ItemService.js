import axios from "axios";

const cookie = document.cookie
const config = {
    headers: {Authorization: `Bearer ${cookie.accessToken}`}
};

export async function searchItem(query) {
    try {
        return await axios.get("http://localhost:8080/api/item/search" + query)
    } catch (e) {
        return e.response
    }
}

export async function addToCart(data) {
    try {
        await axios.post("http://localhost:8080/api/item/add", data)
    } catch (e) {
        return e.response
    }
}

export async function findItemById(id) {
    try {
        return await axios.get("http://localhost:8080/api/item/" + id)
    } catch (e) {
        return e.response
    }
}

export async function getCart(email) {
    try {
        return await axios.get("http://localhost:8080/api/customer/cart/" + email, config)
    } catch (e) {
        return e.response
    }
}