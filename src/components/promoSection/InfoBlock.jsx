import React from 'react';

const InfoBlock = ({
  title,
  description,
  buttonText,
  image,
  descriptionWidth = 'w389',
  imagePosition = 'right', 
  className = '',
  onButtonClick
}) => {
  const layoutClass = imagePosition === 'left' ? 'reverse' : '';
  
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className={`content3 ${layoutClass} ${className}`}>
      
      <div className="block__info">
        <div className="garamond28">{title}</div>
        <div className={`interreg16 color-grey ${descriptionWidth}`}>
          {description}
        </div>
        {buttonText && (
          <button 
            className="interb14 margin23" 
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
      <div className="info__img">
        {image && (
          <img 
            src={image} 
            alt={title}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
            onError={(e) => {
              console.error(`Не удалось загрузить изображение: ${image}`);
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `
                <div style="
                  width: 100%; 
                  height: 100%; 
                  display: flex; 
                  align-items: center; 
                  justify-content: center; 
                  background: #f5f5f5;
                  color: #666;
                ">
                  <span>${title.substring(0, 20)}...</span>
                </div>
              `;
            }}
          />
        )}
      </div>
      
    </div>
  );
};

export default InfoBlock;