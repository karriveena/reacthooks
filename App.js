//import axios from 'axios';
import React from 'react';
//import { useState,useEffect } from 'react';
//import axios from 'axios';
//import Usingjson from './hooks/Usingjson';
//import  Asyntask from './hooks/callback';
import './App.css';
import User from './childparent/User';

//import Background from './hooks/Background';

//import './App.css';
 

function App(){
  //const isbackground= true;
 /* const [data1,setdata]=useState([]);


 
  useEffect(()=>{
    const fetchdata=async()=>{
      const getdata=await axios('https://fakestoreapi.com/products');
      setdata(getdata);
    }
    fetchdata();
};
</ul>*/
function getdata(dt){   //CHILD TO PARENT DATA SENDING
    alert(dt)
}
return(
<User useralert={getdata}/>
);

}export default App;