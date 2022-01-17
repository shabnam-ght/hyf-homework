function Border(props){
return(
    <div style={{border:"2px solid",  marginBottom:"5px" , padding:"5px"}}>
    {props.children}    
    </div>
);
}
export default Border;
