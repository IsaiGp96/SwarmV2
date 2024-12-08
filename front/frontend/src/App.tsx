import { useState, useEffect } from 'react'
import './App.css'

const App: React.FC = () => {
  const [data, setData] = useState<string>('')

  const[databa, setDataba] = useState<number>(0);
  const[result, setResultba] = useState<number | null>(null);

  const handleClick = async () => {
    try{
      const response = await fetch('/api/ba',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ databa }),
      });

      const data = await response.json()
      console.log(data)
      
      setResultba(data.result);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetch('/api/data')
    .then((response) => response.json())
    .then((data) => setData(data.message))
    .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  
  return <div>
    {data}
    
    <h1>Ejecutar Algoritmos</h1>
      <input
        type="number"
        value={databa}
        onChange={(e) => setDataba(Number(e.target.value))}
        
      />
      <button onClick={handleClick}>Ejecutar BA</button>

      <div>
        {result && (
          <div>
            <h2>Resultado:</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
      
    </div>;
    
};

export default App
