import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import Product from './Product';
import { products } from '../../data/productsData';
import { addToCart, openModal } from '../../store/orderSlice';

const ProductsList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.order.cartItems);

  const getQuantity = (productId) => cartItems.find((item) => item.id === productId)?.quantity || 0;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(openModal({ type: 'info', title: 'Товар добавлен в корзину', form: { comment: product.title } }));
  };

  const getButtonText = (product) => {
    const quantity = getQuantity(product.id);
    return quantity ? `В корзине: ${quantity}` : 'Добавить в корзину';
  };

  return (
    <div className="content4 animate-section">
      <div className="garamond30">ПРОДУКЦИЯ</div>
      <div className="product__card">
        {products.length > 0 ? (
          products.map((product) => (
            <Product
              key={product.id}
              {...product}
              hasButton={product.hasButton !== false}
              buttonText={getButtonText(product)}
              onAddToCart={() => handleAddToCart(product)}
              className={getQuantity(product.id) ? 'product--in-cart' : ''}
            />
          ))
        ) : (
          <div className="products-empty">
            <p>Товары временно отсутствуют</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
