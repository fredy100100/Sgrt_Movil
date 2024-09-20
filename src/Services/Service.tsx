import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDataCreateI, UserDataI } from "../Presentacion/models/Global";
import { RequestCreateI } from "../Presentacion/models/RequestModels";

const baseUrl: string = "http://192.168.1.19:8080";
// const token = localStorage.getItem('token')
// const user = localStorage.getItem('user')

export const createRequest = async (createRequestData: RequestCreateI) => {
    const token = await AsyncStorage.getItem('token')
    const response = await fetch(`${baseUrl}/adminuser/create_solicitud`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(createRequestData),
    })
    return await response.json();
};

export const login = (userData: UserDataI) => {
    return fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    }).then((response) => response.json());
};

export const getTableRequest = async () => {
    const User = await AsyncStorage.getItem('user')
    const Token = await AsyncStorage.getItem('token')
    const response = await fetch(`${baseUrl}/adminuser/movil/solicitudes/${User}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Token}`
        }
    })
    return await response.json();
};
