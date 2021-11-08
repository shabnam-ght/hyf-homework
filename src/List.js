import ListItem from "./ListItem";
function List({list}){
    
    return(
        <div>
            <ol>
                {list.map((item)=>{
                    return(
                        <li>
                            <ListItem listItem={item}/>
                        </li>
                    );
                })}
                
            </ol>
        </div>
    )
}
export default List;