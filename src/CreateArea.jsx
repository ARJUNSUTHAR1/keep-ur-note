import React,{useState} from 'react'
import "./app.css"

const CreateArea = (props) => {
 

  const [show,setShow] = useState(false);
  const [note ,setNote] =useState({
    title : "",
    desc : ""
   });
  
    function handleChange(event){
    
      const {name , value} = event.target
      setNote(prevNote =>{
        return {
          ...prevNote,
          [name] : value

        }
      } )
    }
    function submitNote(event){
      if(note.title === "" && note.desc === ""){
        alert("title and description not be empty");
       }
       else{
      props.onAdd(note);
   
       }
    
      event.preventDefault();
      setNote({
        title : "",
        desc : ""
       });}
    
    
  
    function showTitle(){
      setShow(true)
    }
  
  return (
    <div className="inputarea">
      {show ? <input  onChange={handleChange} type="text" placeholder='TITLE' name = "title" value={note.title} /> : null}
      <textarea onClick={showTitle} onChange={handleChange}  name="desc" id="" cols="30" rows={show ? 3 : 1} placeholder='TAKE A NOTE' value={note.desc}></textarea>
      <button onClick={submitNote} className="btn1">add</button>
    </div>
  )
}


export default CreateArea;
