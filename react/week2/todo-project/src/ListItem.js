import React, { useState } from 'react';

function ListItem({listItem,deleteListItem}){
        const [value,setValue]=useState(false)
    return(
        <div>
            <button onClick={()=>deleteListItem(listItem.id)}>Delete</button>
        <p style={{textDecoration:value?"line-through":"none"}}
        >{listItem.id ,listItem.description}</p>
        <input type="checkbox" checked={value}
        onChange={(e)=> setValue(e.target.checked)}></input>
        </div>
    )
}
export default ListItem;