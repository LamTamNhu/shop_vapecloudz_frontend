import axios from "axios";
import {useCookies} from "react-cookie";

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

export async function getCartCount(email) {
}