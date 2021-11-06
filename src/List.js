import ListItem from "./ListItem";
function List({list}){
    const list_Items=list;
    return(
        <div>
            <ol>
                {list_Items.map((item)=>{
                    return(
                        <li>
                            <ListItem listItem={item}></ListItem>
                        </li>
                    );
                })}
                
            </ol>
        </div>
    )
}
export default List;