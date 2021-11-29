import { useState , useEffect} from "react";
const api='https://api.github.com/search/users?q=';
function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
/*
  useEffect(() => {
    fetch(`${api}${search}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
*/


useEffect(() => {
  const fetchGit = () => {
     return fetch(`${api}${search}`, {method: "GET"}
  )
    .then(res => {
      return res.json();
    })
    .then(result => {
      setIsLoaded(true);
     setData(result);
    })
    .catch(err => {
      setIsLoaded(true);
      setError(err);
    });
};
fetchGit();
}, [search]);

  return (
    <div>
      
        <h2>Github user searcher</h2>
        <input type="text"></input>
        <ul>
          <li>{data}</li>
        </ul>
        <button onClick={()=>setSearch("shabnam-ght")}>test</button>
    </div>
  );
}

export default App;
