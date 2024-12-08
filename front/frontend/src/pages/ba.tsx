import { useState, useEffect } from 'react';

const BA = () =>{
    //const [data, setData] = useState<string>(''); //Se comenta para evitar warning
    const [,setData] = useState<string>(''); //Se deja este para evitar warning
    const [databa, setDataba] = useState<number>(0);
    const [result, setResultba] = useState<any | null>(null);
  
    const handleClick = async () => {
      try {
        const response = await fetch('/api/ba', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ databa }),
        });
  
        const data = await response.json();
        setResultba(data.result);
      } catch (error) {
        console.error('Error: ', error);
      }
    };
  
    useEffect(() => {
      fetch('/api/data')
        .then((response) => response.json())
        .then((data) => setData(data.message))
        .catch((error) => console.error('Error fetching data: ', error));
    }, []);
  
    return (
      <div>
        <h1>Ejecutar Algoritmos</h1>
        <input
          type="number"
          value={databa}
          onChange={(e) => setDataba(Number(e.target.value))}
        />
        <button onClick={handleClick}>Ejecutar ACO</button>
  
        {result && (
          <div>
            <h2>Resultado:</h2>
            <table>
              <thead>
                <tr>
                  <th>Fecha Inicio</th>
                  <th>Hora Inicio</th>
                  <th>Hora Finalización</th>
                  <th>Iteraciones</th>
                  <th>Mejor Alternativa</th>
                  <th>Tiempo Ejecución</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{result.fecha_inicio}</td>
                  <td>{result.hora_inicio}</td>
                  <td>{result.hora_finalizacion}</td>
                  <td>{result.iteraciones}</td>
                  <td>
                    <ul>
                      {result.mejor_alternativa.map((value: number, index: number) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{result.tiempo_ejecucion}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
}

export default BA