function ListItem({listItem}){
    return(
        <div>
        <p>{listItem.id ,listItem.description}</p>
        <input type="checkbox"></input>
        </div>
    )
}
export default ListItem;