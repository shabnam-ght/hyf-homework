import ListItem from "./ListItem";
function List({list,deleteListItem,editListItem}){

    return(
        <div>
            <ol>
                {list.map((item)=>{
                    return(
                        
                        <ListItem listItem={item} deleteListItem={deleteListItem} editListItem={editListItem}/>
                        
                    );
                })}
                
            </ol>
        </div>
    )
}
export default List;