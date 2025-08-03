import { useState } from "react";
import './ToDo.css';
function ToDo(){
const[tasks,setTasks]=useState([]);
const[newTask,setNewTask]=useState("");

function handleInputChange(event){
   setNewTask(event.target.value)
}
function addTask(){
   if(newTask.trim()!==""){
     setTasks(c=>[...c,newTask]);
    setNewTask("")
   }
}
function deleteTask(index){
    setTasks(tasks.filter((element,i)=>i !==index));
}
function moveTaskUp(index){
  if(index>0){
    const updatedTask=[...tasks];
    [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
    setTasks(updatedTask);
  }
}
function moveTaskDown(index){
if(index<tasks.length-1){
    const updatedTask=[...tasks];
    [updatedTask[index],updatedTask[index+1]]=
    [updatedTask[index+1],updatedTask[index]];
    setTasks(updatedTask);
  }
}
return(
  <div className=" text-center text-2xl ">
      <h1 className="heading text-5xl  ">To-Do-List</h1>
   <div>
       <input className="input border-1" type="text" placeholder="Enter a Task..." value={newTask} onChange={handleInputChange}/>
       <button className="add border-1 bg-green-900" onClick={addTask}>ADD</button>
   </div>
   <ol className="subHead">
      {tasks.map((task,index)=>
      <li key={index}>
        <span className="task">{task}</span>
        <button className=" up border-1 " onClick={()=>moveTaskUp(index)}>UP</button>
        <button className="down border-1 " onClick={()=>moveTaskDown(index)}>DOWN</button>
        <button className="dlt border-1 " onClick={()=>deleteTask(index)}>DELETE</button>

      </li>)}
   </ol>
 </div> )
}
export default ToDo;