import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'

import ListItems from './Components/ListItems'






function App() {
  const [input,setInput]=useState("")
  const [item,setItem] =useState([])
   const handleChange=(e)=>{
    const inputValue=e.target.value;
    setInput(inputValue)
 }
 const handleClick=(e)=>{
   e.preventDefault()
   if(input!==""){
   const itemObj = {
     inv:input,
     completed:false,
     key:Date.now()
   }
   setItem([...item,itemObj]);
   setInput('')
  
   console.log(item) 
  }}
  
  return (
    <div className="main-container"  >
     <Form handleChange={handleChange}   input={input} handleClick={handleClick}   className="form" />
     <ListItems items={item}  setItem={setItem}   />
    </div>
  );
}

export default App;
