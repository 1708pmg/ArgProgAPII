import React from 'react';
import termometro from './Imagenes/termometro.png';
import datosApi from './api.json';
import weatherCodeInfo from './IconClima.json';
/*import { formatearFechaYHora } from './formatearFechaYHora';*/

function obtenerTemperaturaPorHora(tiempo) {
  // Buscar el índice en el array hourly.time que coincide con el tiempo proporcionado
  const indiceHora = datosApi.hourly.time.findIndex((hora) => hora === tiempo);

  // Retornar la temperatura correspondiente a ese índice
  return datosApi.hourly.temperature_2m[indiceHora];
}

function InfoGeneralClima() {
  const weatherCode = datosApi.daily.weathercode[0].toString();
  const weatherCondition = weatherCodeInfo["weatherCodeInfo"][weatherCode];
  /*const fechaApi = new Date(datosApi.current_weather.time);*/
  /* const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);*/

  // Obtener la temperatura correspondiente a un tiempo específico (por ejemplo, "2023-10-03T21:00")
  const tiempoEspecifico = "2023-10-03T21:00";
  const temperaturaPorHora = obtenerTemperaturaPorHora(tiempoEspecifico);

  return (
    <>
      <div className='info-general'>
        <div >
          <h5 className="temperatura">Temperatura actual</h5>
          <p className='temp-actual'>
            <img src={termometro} alt="Icono de Temperatura" className='icon-temp' />
            {temperaturaPorHora} °C
          </p>
        </div>

        <div >
          <h5 className='estado'>Estado del clima</h5>
          <p className='estado-clima'>
            {weatherCondition?.name}
            <img src={weatherCondition?.image_src} alt={weatherCondition?.name} className='icon-clima' />
          </p>
        </div>
      </div>
    </>
  );
}

export default InfoGeneralClima;


