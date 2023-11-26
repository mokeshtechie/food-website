import { useEffect, useState } from 'react';
import axios from "axios";


function Useaxios  (param)  {
    let[response,setResponse]= useState({});
    let [isLoading,setIsLoading]= useState(false);
    let[error,setError]=useState('')
    axios.defaults.baseURL = 'https://api.unsplash.com/'

    let fetchData = async (url)=>{
        try{
            setIsLoading(true);
            let res = await axios(url); 
            setResponse(res.data.results);
        }catch(err) {
            setError(err)
        } finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData(param);
        },[param])
    
    

    return {
       
            response,
            isLoading,
            error,
            fetchData: url => fetchData(url)        
    }
   
}

export default Useaxios;
