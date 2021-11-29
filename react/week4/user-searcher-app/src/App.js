import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query !== "") {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.github.com/search/users?q=${query}`);
        const json = await res.json();
        setData(json.items);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }}, [query]);

  return (
    <>
      <h2>Github user searcher</h2>
      <input type="text" placeholder="search for user" value={query} onChange={(event) => setQuery(event.target.value)} />
      
      {isLoading===true && 
      <p>is loading...!</p>
      }
      {data?.length>0 && 
      <ul>
        {data.map((item) => (
          <li>{item.login}</li>
        ))}
      </ul>
      }
      {!data && 
        <p>
          No result!!!!!
        </p>
      
      }

      {error &&
      
        <p>error: {error}</p>
      }
    </>
  );
}

export default App;