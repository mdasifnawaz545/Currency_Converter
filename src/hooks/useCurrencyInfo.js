import { useEffect, useState } from "react"
import axios from "axios"
const useCurrencyInfo = (currency) => {
    const [info, setinfo] = useState({});
    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>(res.json()))
        .then((res)=>(setinfo(res[currency])))  
        // axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // .then((res)=>(setinfo(res[currency]))); why axios is not working properly in this case.
    }, [currency])
    console.log(info);
    return info;
}

export default useCurrencyInfo;






