import React, { useState } from 'react';

function ListItem({listItem,deleteListItem,editListItem}){
    const [value,setValue]=useState(false)
  const [editing, setEditing] = useState(false);
  const [todo, setTodo] = useState("");
    return(
        <li style={{border:"2px solid black", marginBottom:"5px"}}>
            
                {editing ? (
                <input
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                    value={todo}
                    name="text"
                    autoComplete="off"
                />
                ) : (
                <span style={{ textDecoration: value ? "line-through" : null }}>
                    {listItem.description},{listItem.date}
                </span>
                )}
                <button onClick={editing?() => {setEditing(!editing); editListItem(listItem.id,todo);} : ()=>setEditing(!editing)} type="button">
                {editing ? "save" : "edit"}
            </button>
            <button onClick={()=>deleteListItem(listItem.id)}>Delete</button>
            <input type="checkbox" checked={value}
            onChange={(e)=> setValue(e.target.checked)}></input>
            
        </li>
    )
}
export default ListItem;