import {useContext, useState} from "react"
import { ImageContext } from "../App"

function SearchField  () {
    const[searchValue, setsearchValue]=useState("")
    const handleinputChange=(e)=>{
        setsearchValue(e.target.value)
    }
    const handleButtonSearch = ()=>{
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=y_G0Dn9XTEprlfpXDWRk2cWgc6lVr6nfvVFnHop9gcY`);
        setsearchValue("");
    }
    const {fetchData}=useContext(ImageContext)
    return (
        <div className="flex">
            <input 
            className='bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl  text-black '
            type="search"
           value={searchValue}
           onChange={handleinputChange}
            placeholder="search anything..."/>
            <button
            onClick={handleButtonSearch}
            className="bg-blue-600 py-2.5 px-6 text-white text-align-center focus:ring-2 rounded-tr rounded-br
    focus:ring- focus:ring-blue-300 disabled:bg-gray-400"
    disabled={!searchValue}
            >search</button>
        </div>
    );
}

export default SearchField;
