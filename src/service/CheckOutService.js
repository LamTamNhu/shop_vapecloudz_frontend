import axios from "axios";
import {config} from "./ItemService";

export async function createOrderBackEnd(data) {
    try {
        return await axios.post("http://localhost:8080/api/checkout/create", data)
    } catch (e) {
        return e.response
    }
}

export async function captureOrderBackEnd(data) {
    try {
        return await axios.post("http://localhost:8080/api/checkout/capture", data)
    } catch (e) {
        return e.response
    }
}