import React,{useState} from 'react'
import Todoitems from './todoitems';
import './Todo.css'
import 'bootstrap/dist/css/bootstrap.css';



function Todo(props) {

const [arr, setArr]=useState([]);
const [ empty,setEmpty]=useState("Your Notes is Empty");

const onAdd=()=>{
  var val=document.getElementById("desc").value
  document.getElementById("desc").value=''
  console.log(val)
  if(val!==''){
  
  setArr([...arr,
    {
      id:arr.length,
      desc:val
    }
    
  ])
  setEmpty("")
}
  
  

}

const onDelete=(ele)=>{
  console.log(ele)
  setArr(arr.filter(e=>{
     return e.desc!==ele;
  }))
  if(arr.length===1){
    
    setEmpty("Your Notes is Empty")
  }
}
  
       
   
  return (
    <div >
   
    
    
    <h2 id="empty">{empty}</h2>
    
    {
    arr.map(element=>{
      return <Todoitems key={element.id} ele={element.desc} onDel={onDelete} />  
      
    })}
  
    <textarea type="text" id="desc" placeholder='Write Here'/>
    <button id="addbtn" className="btn btn-primary" onClick={onAdd}>Add</button>
   
 
     
    </div>
     
  )
}

export default Todo