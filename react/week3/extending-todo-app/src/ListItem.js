import React, { useState } from 'react';
import Border from './Border';
function ListItem({listItem,deleteListItem,editListItem}){
    const [value,setValue]=useState(false)
  const [editing, setEditing] = useState(false);
  const [todo, setTodo] = useState("");
    return(
        <Border>
        <li >
            
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
                    {listItem.description} , {listItem.deadline}{" "} 
                </span>
                )}
                <button onClick={editing?() => {setEditing(!editing); editListItem(listItem.id,todo);} : ()=>setEditing(!editing)} type="button">
                {editing ? "Save" : "Edit"}
            </button>
            <button onClick={()=>deleteListItem(listItem.id)}>Delete</button>
            <input type="checkbox" checked={value}
            onChange={(e)=> setValue(e.target.checked)}></input>
            
        </li>
        </Border>
    )
}
export default ListItem;