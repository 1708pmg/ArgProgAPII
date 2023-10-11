import React from 'react';
import InfoCiudad from './InfoCiudad'; 
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol'; 
import TemperaturaMinMax from './TemperaturaMinMax'; 
import TemperaturaPorHora from './TemperaturaPorHora';
import datosApi from './api.json'; 

function Clima() {
  const datosClima = {
    ciudad: 'Buenos Aires',
  };

  const fechaActual = new Date(); // Obtener la fecha y hora actuales

  // Convertir hourly a un array
  const hourlyArray = Object.values(datosApi.hourly);

  // Buscar la temperatura correspondiente en hourly
  const temperaturaActual = hourlyArray.find(entry => {
    const horaEntrada = new Date(entry.time);
    return horaEntrada.getTime() === fechaActual.getTime();
  });

  const datosPorHora = hourlyArray.map(entry => ({
    hora: entry.time,
    temperatura: entry.temperature_2m,
  }));

  return (
    <div className="clima-container">
      <InfoCiudad ciudad={datosClima.ciudad} />
      <InfoGeneralClima temperatura={temperaturaActual ? temperaturaActual.temperature_2m : ''} fecha={datosApi.fecha} hora={fechaActual.toLocaleTimeString()} />
      <InfoDetalladaClima 
        humedad={temperaturaActual ? temperaturaActual.relativehumidity_2m : ''}  
        visibilidad={temperaturaActual ? temperaturaActual.visibility : ''}      
        viento={temperaturaActual ? temperaturaActual.windspeed : ''}             
        aire={temperaturaActual ? temperaturaActual.european_aqi : ''}            
      />
      <SalidaPuestaSol salida={datosApi.daily.sunrise} />
      <TemperaturaMinMax minima={datosApi.daily.temperature_2m_min} maxima={datosApi.daily.temperature_2m_max} />
      <TemperaturaPorHora datosPorHora={datosPorHora} />
    </div>
  );
}

export default Clima;


/*import React from 'react';
import InfoCiudad from './InfoCiudad'; 
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol'; 
import TemperaturaMinMax from './TemperaturaMinMax'; 
import TemperaturaPorHora from './TemperaturaPorHora';
import datosApi from './api.json'; 

function Clima() {
  const datosClima = {
    ciudad: 'Buenos Aires',
  };

  const fechaActual = new Date(); // Obtener la fecha y hora actuales

  // Buscar la temperatura correspondiente en hourly
  const temperaturaActual = datosApi.hourly.find(entry => {
    const horaEntrada = new Date(entry.time);
    return horaEntrada.getTime() === fechaActual.getTime();
  });

  const datosPorHora = datosApi.hourly.map(entry => ({
    hora: entry.time,
    temperatura: entry.temperature_2m,
  }));

  return (
    <div className="clima-container">
      <InfoCiudad ciudad={datosClima.ciudad} />
      <InfoGeneralClima temperatura={temperaturaActual ? temperaturaActual.temperature_2m : ''} fecha={datosApi.fecha} hora={fechaActual.toLocaleTimeString()} />
      <InfoDetalladaClima 
        humedad={temperaturaActual ? temperaturaActual.relativehumidity_2m : ''}  
        visibilidad={temperaturaActual ? temperaturaActual.visibility : ''}      
        viento={temperaturaActual ? temperaturaActual.windspeed : ''}             
        aire={temperaturaActual ? temperaturaActual.european_aqi : ''}            
      />
      <SalidaPuestaSol salida={datosApi.daily.sunrise} />
      <TemperaturaMinMax minima={datosApi.daily.temperature_2m_min} maxima={datosApi.daily.temperature_2m_max} />
      <TemperaturaPorHora datosPorHora={datosPorHora} />
    </div>
  );
}

export default Clima;*/



/*import React from 'react';
import InfoCiudad from './InfoCiudad'; 
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol'; 
import TemperaturaMinMax from './TemperaturaMinMax'; 
import TemperaturaPorHora from './TemperaturaPorHora';
import datosApi from './api.json'; 

function Clima() {
  const datosClima = {
    ciudad: 'Buenos Aires',
  };
    
  const datosPorHora = datosApi.hourly.time.map((hora, index) => ({
    hora,
    temperatura: datosApi.hourly.temperature_2m[index],
  }));

  return (
    <div className="clima-container">
      <InfoCiudad ciudad={datosClima.ciudad} />
      <InfoGeneralClima temperatura={datosApi.hourly.temperature.temperature_2m} fecha={datosApi.fecha} hora={datosClima.hora} />
      <InfoDetalladaClima 
        humedad={datosApi.hourly.relativehumidity_2m}  
        visibilidad={datosApi.hourly.visibility}      
        viento={datosApi.hourly.windspeed}             
        aire={datosApi.hourly.european_aqi}            
      />
      <SalidaPuestaSol salida={datosApi.daily.sunrise} />
      <TemperaturaMinMax minima={datosApi.daily.temperature_2m_min} maxima={datosApi.daily.temperature_2m_max} />
      <TemperaturaPorHora datosPorHora={datosPorHora} />
    </div>
  );
}

export default Clima;*/





/*import React from 'react';
import InfoCiudad from './InfoCiudad'; 
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol'; 
import TemperaturaMinMax from './TemperaturaMinMax'; 
import TemperaturaPorHora from './TemperaturaPorHora';
import datosApi from './api.json'

function Clima() {
  const datosClima = {
    ciudad: 'Buenos Aires',
  }
    
  const datosPorHora = datosApi.hourly.time.map((hora, index) => ({
    hora,
    temperatura: datosApi.hourly.temperature_2m[index],
  }));

  return (
    <div className="clima-container">
      <InfoCiudad ciudad={datosClima.ciudad} />
      <InfoGeneralClima temperatura={datosClima.temperatura} fecha={datosClima.fecha} hora={datosClima.hora} />
      <InfoDetalladaClima humedad={datosClima.humedad} visibilidad={datosClima.visibilidad} viento={datosClima.viento} aire={datosClima.aire}/>
      <SalidaPuestaSol salida={datosClima.salida} puesta={datosClima.puesta} />
      <TemperaturaMinMax minima={datosClima.minima} maxima={datosClima.maxima} />
      <TemperaturaPorHora datosPorHora={datosPorHora} />
    </div>
  );
}

export default Clima;*/