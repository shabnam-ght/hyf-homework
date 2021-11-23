import ListItem from "./ListItem";
function List({list,deleteListItem}){

    return(
        <div>
            <ol>
                {list.map((item)=>{
                    return(
                        
                        <ListItem listItem={item} deleteListItem={deleteListItem}/>
                        
                    );
                })}
                
            </ol>
        </div>
    )
}
export default List;