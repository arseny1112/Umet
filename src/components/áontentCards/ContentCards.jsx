import React from 'react';
import './style.css';
import img1 from '../../img/contentCard/Image.png';
import img2 from '../../img/contentCard/Image-1.png'; 
import img3 from '../../img/contentCard/Image-2.png'; 
import img4 from '../../img/contentCard/Image-3.png'; 
const ContentCards = () => {
  const cards = [
    { 
      id: 1, 
      text: 'склад',
      image: img1
    },
    { 
      id: 2, 
      text: 'широкий ассортимент',
      image: img2
    },
    { 
      id: 3, 
      text: 'услуги резки',
      image: img3
    },
    { 
      id: 4, 
      text: 'доставка по рб',
      image: img4
    },
  ];

  return (
    <div className="content2">
      {cards.map((card) => (
        <div key={card.id} className="card1">
          <div className="img__card">
            <img 
              src={card.image} 
              alt={card.text}
              className="card-image"
            />
          </div>
          <div className="intersemi18">{card.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ContentCards;