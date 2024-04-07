import axios from "axios";

const accessToken = getCookie("accessToken")
const config = {
    headers: {Authorization: `Bearer ${accessToken}`}
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
        await axios.post("http://localhost:8080/api/customer/cart/add", data, config)
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

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}