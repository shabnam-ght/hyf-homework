import ListItem from "./ListItem";
function List({list,deleteListItem}){

    return(
        <div>
            <ol>
                {list.map((item)=>{
                    return(
                        <li>
                            <ListItem listItem={item} deleteListItem={deleteListItem}/>
                        </li>
                    );
                })}
                
            </ol>
        </div>
    )
}
export default List;