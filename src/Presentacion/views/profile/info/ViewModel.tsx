import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createRequest, getTableRequest } from '../../../../Services/Service'
import { ToastAndroid } from 'react-native'

export const ViewModel = () => {
    const [data, setData] = useState([])
    const [request, setRequest] = useState({
        fechacre:"",
        obser:"",
        nodoccliente:"",
        idcat:0,
        idest:0,
        prio:"",
    })
    const [response, setResponse] = useState({

    })
    useEffect(()=>{
        getTableRequest().then(Response =>{setData(Response)})
    },[response])
    const handleInputChange = async(property: string, value: string | number)=>{
        const nodoccliente = await AsyncStorage.getItem('user')
        const fechacre = new Date().toLocaleDateString();
        const idest = 1
        const prio = "PENDIENTE"
        if (nodoccliente){
            setRequest({...request, nodoccliente, fechacre, idest, prio, [property]: value });
        }
    };
    const onSumit = ()=>{
        createRequest(request).then ((dataResponse)=>{
            setResponse (dataResponse)
            ToastAndroid.show('Solicitud creada con exito', ToastAndroid.SHORT)});

    }
    return{
        data, handleInputChange, ...request, onSumit
    }
}


