import './App.css';
import { Button } from 'react-bulma-components';
import { useEffect, useState } from 'react';

function App() {


  const [quote, setQuote] = useState(0);


      const getApiLocal = async () => {
        const res = await fetch("https://api.kanye.rest", {
          method: 'GET',
          mode: 'no-cors',
          headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application-json', 
          },
          })
          .then(res => {
            console.log(res) 
            setQuote(res)
            console.log(quote)
            return res.json()
         })
          
        };

        useEffect(() => {
          getApiLocal();
        }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={(e)=>getApiLocal()} rounded color="dark">Chamar a API</Button>
      </header>
    </div>
  );
}

export default App;
