import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import List from './components/List';


function App() {


  let [data,setData]= useState([]);



  useEffect(()=>{
    if(localStorage.getItem("earnings-spendings-diary") && localStorage.getItem("earnings-spendings-diary").length>0){
      let tempData=JSON.parse(localStorage.getItem("earnings-spendings-diary"));
      setData(tempData);
    }
  },[]);


  function addNewDetail(newData){
    
    let tempData= data;
    tempData=tempData.concat(newData);
    setData((data)=>tempData);
    

   localStorage.setItem("earnings-spendings-diary",JSON.stringify(tempData));

    }
  
  
  function remove(key){
   let tempData= data.filter(t=> t.date!== key);

    setData(tempData);

    localStorage.setItem("earnings-spendings-diary",JSON.stringify(tempData));
  }
  

  return (
    <div className="App">
        <Dashboard data={data}/>
        <Form addNewDetail={addNewDetail} />
        <List data={data} remove={remove} />
    </div>
  );
}

export default App;
