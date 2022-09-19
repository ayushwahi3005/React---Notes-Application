import React from 'react'
import Button from 'react-bootstrap/Button';
import './todoitem.css';
function todoitems(prop) {
   
  return (
   
    <div id="main">
    
    <div id="inner">{prop.ele}</div>
   
    <button type="button" className="btn btn-danger" onClick={()=>{prop.onDel(prop.ele)}}>delete</button>
         
       
       
    
        
    
    
    </div>
  )
}
  
export default todoitems