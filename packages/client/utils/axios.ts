import axios from "axios";
import { API_URL } from "./constants";
export const axiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});
