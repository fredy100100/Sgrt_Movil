import React, { useState } from 'react'
import { login } from '../../../Services/Service'

const ViewModel = () => {

    const [userData, setUserData] = useState ({
        correo:'',
        pass:''
    })

    const onsubmit=() =>{
        if (!userData.correo || !userData.pass) return console.log("Correo y contraseña obligatorios")
            login(userData).then((Response)=>console.log(Response)) 
        } 

    const handledinput=(propierties: string, values: string) =>{
        setUserData({...userData, [propierties]: values});
    } 

    return {
        handledinput, onsubmit, ...userData
    } 

}

export default ViewModel
