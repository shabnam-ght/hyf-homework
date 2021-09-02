function getFullname(firstname, surname,useFormalName){
    let fullName=firstname + ' ' + surname;
    if (useFormalName===true){
        fullName='lord'+' '+fullName;
    }
    
    return fullName;

}
let fullname1 ="shabnam";
let fullname2="ghatei";
let bool=true;
console.log(getFullname(fullname1 ,fullname2 ,bool)); 