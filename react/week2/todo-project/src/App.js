import React, { useState, useRef, useEffect } from 'react';
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

  
 function addNewTodo(newDescription){
  
  const newTodo={

    id:list.length+1,
    description:newDescription,
  }; 
  setList((list)=>[...list,newTodo]);
  }
  return (
   <>
   
   <List list={list}/>
   <label htmlFor="description"></label>
   <input type="text" id="decription" name="description" onChange={(e)=>setDescription(e.target.value)}></input>
   <button type="submit" onClick={()=> addNewTodo(description)}>add</button>
   
  </>
  );
}

export default App;
