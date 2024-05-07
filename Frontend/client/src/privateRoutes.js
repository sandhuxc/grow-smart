import React from "react";
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children})=>{
    const auth = localStorage.getItem('user');
    if(!auth){
    return <Navigate to = '/back'/>
    }else if(JSON.parse(auth).role == "Parent"){
        return children
    }else  if(JSON.parse(auth).role == "Nutrition"){
        return <Navigate to = '/Nutritionhome'/>
    }
    
}

export default PrivateRoute