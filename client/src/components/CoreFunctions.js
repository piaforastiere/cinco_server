import { API } from "../config";
import axios from "axios";


export async function getClientToken() {
    const response = await fetch('/api/paypal-token');   
     
    return await response.json();
}

export const braintreeClientToken = () => {
    return fetch(`${API}/braintree/token`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type" : "aplication/json",
            
        },
    }).then( res => {
        return res.json()
    }).catch(err => {
        console.log(err)
    })
}

