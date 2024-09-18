import React, { useState } from 'react'
import { login } from '../../../Services/Service'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ViewModel = () => {

    const [userData, setUserData] = useState({
        correo: '',
        pass: ''
    })

    const [response, setResponse] = useState({
        nodoc: ''
    })

    const onsubmit = () => {
        if (!userData.correo || !userData.pass) return console.log("Correo y contraseña obligatorios")
        login(userData).then((Response) => {
            AsyncStorage.setItem('user', Response.nodoc)
            AsyncStorage.setItem('token', Response.token)
            setResponse(Response)
            console.log('token: ' + Response.token)
            console.log('user: '+ Response.nodoc)
        })

    }


    const handledinput = (propierties: string, values: string) => {
        setUserData({ ...userData, [propierties]: values });
    }

    return {
        handledinput, onsubmit, ...userData, response
    }

}

export default ViewModel
