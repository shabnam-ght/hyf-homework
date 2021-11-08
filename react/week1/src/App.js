import { useState } from 'react';
import List from './List';
import './App.css';
const data=["Get out of bed, Wed Sep 13 2017","Brush teeth, Thu Sep 14 2017","Eat breakfast, Fri Sep 15 2017"];
function App() {
  const [list, setList] = useState(data);
  return (
   
   <List list={list}/>
  
  );
}

export default App;
