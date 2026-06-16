import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import Stocks from './Stocks';
import { stocks } from '../../data/productsData';
import { addToCart, openModal } from '../../store/orderSlice';

const StocksList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.order.cartItems);
  const getQuantity = (productId) => cartItems.find((item) => item.id === productId)?.quantity || 0;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(openModal({ type: 'info', title: 'Товар добавлен в корзину', form: { comment: product.title } }));
  };

  return (
    <div className="content4 animate-section">
      <div className="garamond30">НОВЫЕ ПОСТУПЛЕНИЯ И АКЦИИ</div>
      <div className="product__card">
        {stocks.length > 0 ? (
          stocks.map((product) => (
            <Stocks
              key={product.id}
              {...product}
              hasButton={product.hasButton !== false}
              buttonText={getQuantity(product.id) ? `В корзине: ${getQuantity(product.id)}` : 'Добавить в корзину'}
              onAddToCart={() => handleAddToCart(product)}
              className={getQuantity(product.id) ? 'product--in-cart' : ''}
            />
          ))
        ) : (
          <div className="products-empty"><p>Товары временно отсутствуют</p></div>
        )}
      </div>
    </div>
  );
};

export default StocksList;
