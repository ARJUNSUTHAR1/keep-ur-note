import React from 'react'
import "../src/App.css"
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';


function Notes(props){
  function deleteitem(event){
    props.ondelete(props.id);
    event.preventDefault();
  }
  return (
  
   
      <div className='notes' >
      <b> <p className='para1'>{props.title}</p></b> 
        <p className='para2'>{props.desc}</p>
        <button onClick={deleteitem} className='btn2'><DeleteSweepIcon/></button>
     </div>
      
   );  
}
       
export default Notes;
