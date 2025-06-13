// AppMy.js (или как вы его назвали)
import React from 'react';
import { YmapsProvider, Map, Placemark } from 'react-ymaps';
import './style.css';

const AppMy = () => {
  const ymaps = {
    apikey: 'YOUR_API_KEY', // ЗАМЕНИТЕ ЭТИМ!
    lang: 'ru_RU',
    load: 'package.full',
  };

  return (
    <div className="map-container">
      <YmapsProvider options={ymaps}>
        <Map defaultState={{ center: [52.965407, 55.923776], zoom: 18 }} className="ymap">
          <Placemark geometry={[52.965407, 55.923776]} />
        </Map>
      </YmapsProvider>
    </div>
  );
};

export default AppMy;