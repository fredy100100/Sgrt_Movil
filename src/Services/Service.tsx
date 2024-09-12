import { UserDataCreateI, UserDataI } from "../Presentacion/models/Global";

const baseUrl: string = "http://192.168.1.11:8080";
// const token = localStorage.getItem('token')
// const user = localStorage.getItem('user')

export const login = (userData: UserDataI) => {
    return fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    }).then((response) => response.json());
};
