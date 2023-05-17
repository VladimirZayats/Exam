import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';


export const AppContext = React.createContext({})

function App() {
//хранения данных туров
const [tyrs, setTyrs] = useState([])

useEffect (()=>{
  async function axiosData(){
    //const tyrsData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/tyrs')
    const tyrsData = await axios.get('    https://64651a709c09d77a62e3c1a2.mockapi.io/tyrs')
    setTyrs(tyrsData.data)
   
  }
  axiosData();
},[])


  return (
    <div>

      <Router>
        <Header/>
          <Routes>
          <Route path='/'
              element={
                <Home
                  item={tyrs}
                />
              }
            />
        </Routes>
      </Router> 

      <Footer/>
    </div>
  );
}

export default App;


