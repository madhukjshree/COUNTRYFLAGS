import React,{useState,useEffect} from 'react';
import './App.css';

function App() {

  const[countries, setCountries] = useState([]);
  const[error,setError] = useState(null);

  useEffect(()=>{
    const fetchD = async ()=>{
      try{
        const response = await fetch('https://restcountries.com/v3.1/all');
        if(!response.ok){
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setCountries(data);
      }
      catch(error){
        setError(error.message);
        console.error(error);
      }
    };

    fetchD();


  },[]);


  return (
    <div className="App">
        {error && <p>ERROR: {error}</p>}  
        <div className='countries'>
          {countries.map(countryy=>(
            <div key={countryy.name.common} className='mycount'>
                <img src={countryy.flags.png} alt={`flag of ${countryy.name.common}`}/>
                <p>{countryy.name.common}</p>

            </div>
          ))}
        </div>
    </div>
  );
}

export default App;

