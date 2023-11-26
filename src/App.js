import logo from './logo.svg';
import './App.css';
import Jumbutron from './components/jumbutron';
import SearchField from './components/searchField';
import Images from "./components/images"
import UseAxios from './useaxios';
import { createContext } from 'react';
export let ImageContext = createContext()


function App() {



  let {response,isLoading,error,fetchData } = UseAxios(`search/photos?page=1&query=cat&client_id=y_G0Dn9XTEprlfpXDWRk2cWgc6lVr6nfvVFnHop9gcY`);
  console.log(response);
  let value = {
    response,
    isLoading,
    error,
    fetchData
  }
  return (
  <ImageContext.Provider value={value}>
    <Jumbutron>
      <SearchField/>
    </Jumbutron>
    <Images/>
    </ImageContext.Provider>
  );
}

export default App;
