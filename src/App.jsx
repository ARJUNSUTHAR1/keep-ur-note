import Nav from './nav'
import React, { useState , useEffect } from 'react'
import './App.css'
import CreateArea from './CreateArea'
import Footer from './footer'
import Notes from './Notes'

const getLocalData = ()=>{
  let list = localStorage.getItem("list");
  if(list){
    return JSON.parse(localStorage.getItem("list"));
  }
  else{
    return [];
  }
}
function App() {

const [notes, setNotes] = useState(getLocalData());

function addNote(note){

 
  setNotes(prevalue => {
    return [...prevalue , note]
  })

  
 
  
  
}
function deleteitems(id){
  setNotes((prevalue) =>{
    return prevalue.filter((items,index)=>{
      return index !== id;
    })
  })
  
}

useEffect(()=>{
  localStorage.setItem("list",JSON.stringify(notes))
},[notes])


  return (
    <>
    <Nav />
    <div className="container">
   
     <CreateArea onAdd = {addNote}/>
  
    </div>
    <div className="flex">
    {notes.map((items,index) => {
      return  <Notes ondelete = {deleteitems} key = {index} id = {index} title = {items.title} desc = {items.desc}/>
    })}
   
    </div>
   
    <Footer/>
   
    </>
  )
}

export default App;
