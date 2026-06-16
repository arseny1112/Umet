import React from "react";

const Stocks = ({
  title = "ТРУБА ПРОФИЛЬНАЯ 40x20",
  price = "от 78 500 ₽/тн",
  description = "Труба электросварная, применяется в строительстве и каркасных конструкциях.",
  image = "",
  hasButton = true,
  buttonText = "Добавить в корзину",
  onAddToCart,
  className = ""
}) => {
  const handleImageError = (e) => {
    e.target.style.display = "none";
    const container = e.target.parentElement;
    const fallback = container.querySelector(".image-fallback");
    if (fallback) fallback.style.display = "flex";
  };

  return (
    <div className={`product ${className}`}>
      <div className="product__img">
            <img className="product__img"
              src={image}
              alt={title}
              onError={handleImageError}
              loading="lazy"
            />
      </div>

      <div className="product__txt">
        <div className="block__txt-product1">
          <div className="intersemi14 product__title">{title}</div>
          <div className="intersemi14 style-txt product__price">
            Цена: {price}
          </div>
        </div>
        <div className="interreg14 product__description">{description}</div>
        {hasButton && (
          <button
            className="button2 product__button"
            onClick={onAddToCart}
            aria-label={`Добавить ${title} в корзину`}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Stocks;