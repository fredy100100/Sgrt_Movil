import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getTableRequest } from '../../../../Services/Service'

export const ViewModel = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        getTableRequest().then(Response =>{setData(Response)})
    },[])
    return{
        data
    }
}
