import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './style.css';

const AppMap = () => {
  const mapState = {
    center: [52.965407, 55.923776],
    zoom: 18,
    controls: ['zoomControl', 'fullscreenControl']
  };

  return (
    <div className="map-container">
      <YMaps query={{ apikey: 'ваш-api-ключ', lang: 'ru_RU' }}>
        <Map 
          state={mapState}
          width="100%"
          height="400px"
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark 
            geometry={[52.965407, 55.923776]}
            options={{
              preset: 'islands#redDotIcon',
              iconColor: '#ff0000'
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default AppMap;