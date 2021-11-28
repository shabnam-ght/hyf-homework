import React, { useState, useEffect } from 'react';
import List from './List';
import './App.css';

function App() {
  const [description,setDescription]=useState("");
  const [date,setDate]=useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw")
      .then(res => res.json())
      .then(
        (result) => {
          setList(result);
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])



  function editListItem(id,newDescription){
    const newList=[...list];
    const objIndex = newList.findIndex((obj => obj.id === id));
    newList[objIndex].description=newDescription;
    setList(newList);
  }
  
 
  function deleteListItem(id){
    const newList=[...list];
    const index=newList.map(x=>{
      return x.id;
    }).indexOf(id);
    newList.splice(index,1);
    setList(newList);
  }
 function addNewTodo(newDescription,newDate){
  const dateAsString=newDate.toString();
  const newTodo={

    id:list.length+1,
    description:newDescription,
    date:dateAsString
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
   <List list={list} deleteListItem={deleteListItem} editListItem={editListItem}/>
   
   <label htmlFor="description">todo description</label>
   <input type="text" id="inputDescription" value={description} name="inputDescription" onChange={(e)=>setDescription(e.target.value)}></input>
   <label htmlFor="deadLine">deadline</label>
   <input type="date" id="dead_line"  name="deadLine" value={date} onChange={(e)=>setDate(e.target.value)}></input>
   
   <button type="submit" onClick={()=> addNewTodo(description,date)}>add</button>

   
  </>
  );
}
export default App;
