import { useEffect, useState } from "react"

 

const UseCurrencyinfo = ( ) => {
    const [data , setData] = useState({})
   useEffect(()=>{
    const respons =async()=>{
        const data=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`);
        const currencyData= await data.json();
        console.log(currencyData)
        setData(currencyData)}
        console.log(data)
   },[])
   return data

}

export default UseCurrencyinfo