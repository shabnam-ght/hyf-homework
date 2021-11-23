import React, { useState, useEffect } from 'react';
import List from './List';
import './App.css';
  const todoList = [
    {
      id: 1,
      description: "Get out of bed",
    },
    {
      id: 2,
      description: "Brush teeth",
    },
    {
      id: 3,
      description: "Eat breakfast",
    },
  ];
function App() {
  const [description,setDescription]=useState("");
  const [list, setList] = useState(todoList);
 
  function deleteListItem(id){
    const newList=[...list];
    const index=newList.map(x=>{
      return x.id;
    }).indexOf(id);
    newList.splice(index,1);
    setList(newList);
  }
 function addNewTodo(newDescription){
  
  const newTodo={

    id:list.length+1,
    description:newDescription,
  }; 
  setList((list)=>[...list,newTodo]);
  setDescription("");
  }
  const [timer,setTimer]=useState(0)
useEffect(()=>{
  const timer=setInterval(()=>{
    setTimer(prev=>prev+1)
  },1000)
  return()=>clearInterval(timer)
},[])
  return (
   <>
    {list.length===0 &&
   <p>No item</p>
   }
   <h3>you have used {timer}seconds on this page</h3>
   <List list={list} deleteListItem={deleteListItem}/>
   <label htmlFor="description"></label>
   <input type="text" id="inputDescription" value={description} name="inputDescription" onChange={(e)=>setDescription(e.target.value)}></input>
   <button type="submit" onClick={()=> addNewTodo(description)}>add</button>
   
  </>
  );
}
export default App;
