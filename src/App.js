import React, { useState, useEffect } from 'react';
import './App.css';
import Clima from './Clima/Clima';
import Transporte from './Transporte/Transporte';
import datosApi from './Clima/api.json';

function App() {

  const [datosClima, setDatosClima] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDatosClima(datosApi);
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <div className="App">
      <div className="clima-container">
        {!loading && datosClima && <Clima datosApi={datosClima} />}
        {loading && <h1>Cargando datos</h1>}
      </div>
      <div className="transporte-container">
        {}
        <Transporte />
      </div>
    </div>
  );
}

export default App;




/*import React from 'react';
import './App.css';
import Clima from './Clima/Clima';
import Transporte from './Transporte/Transporte';

function App() {
  const datosClima = {
  };

  
  const datosTransporte = {
  };

  return (
    <div className="App">
      <div className="clima-container">
        <Clima {...datosClima} />
      </div>
      <div className="transporte-container">
        <Transporte {...datosTransporte} />
      </div>
    </div>
  );
}

export default App;*/