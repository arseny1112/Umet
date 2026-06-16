import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  closeModal,
  decreaseCartItem,
  EMAIL_TO,
  openModal,
  removeFromCart,
  markOrderSent,
  updateFormField,
} from '../../store/orderSlice';
import { catalog } from '../../data/productsData';
import './style.css';

const ModalShell = ({ title, children, onClose }) => (
  <div className="modal" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
    <button className="modal__overlay" type="button" aria-label="Закрыть окно" onClick={onClose} />
    <div className="modal__content">
      <button className="modal__close" type="button" aria-label="Закрыть" onClick={onClose}>×</button>
      <h2 id="order-modal-title" className="modal__title modal__title--center">{title}</h2>
      {children}
    </div>
  </div>
);

const OrderForm = ({ title, form, status, error, successMessage, onChange, onSubmit, onClose, cartItems, mailBody }) => {
  const isLoading = status === 'loading';
  const isSuccess = status === 'succeeded';

  return (
    <>
      <div className="modal__header">
        <p className="modal__subtitle">Оставьте контакты</p>
        <h2 id="order-modal-title" className="modal__title">{title}</h2>
        <p className="modal__text">Заявка отправится на почту {EMAIL_TO}. Если это первая заявка через FormSubmit, на эту почту придёт письмо для подтверждения.</p>
      </div>

      {isSuccess ? (
        <div className="modal__success" role="status">
          <div className="modal__success-icon">✓</div>
          <p>{successMessage}</p>
          <button className="button2 modal__submit" type="button" onClick={onClose}>ЗАКРЫТЬ</button>
        </div>
      ) : (
        <form className="modal__form" action={`https://formsubmit.co/${EMAIL_TO}`} method="POST" target="formsubmit-frame" onSubmit={onSubmit}>
          <input type="hidden" name="_subject" value={`Новая заявка: ${title}`} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="Источник заявки" value={title} />
          <input type="hidden" name="Корзина" value={mailBody} />
          {cartItems.length > 0 && (
            <div className="modal__cart-preview">
              <b>В заявке:</b>
              {cartItems.map((item) => <span key={item.id}>{item.title} × {item.quantity}</span>)}
            </div>
          )}
          <label className="modal__label">Имя
            <input className="modal__input" type="text" name="Имя" placeholder="Как к вам обращаться" value={form.name} onChange={(event) => onChange('name', event.target.value)} required />
          </label>
          <label className="modal__label">Телефон
            <input className="modal__input" type="tel" name="Телефон" placeholder="+7 900 000-00-00" value={form.phone} onChange={(event) => onChange('phone', event.target.value)} required />
          </label>
          <label className="modal__label">Email
            <input className="modal__input" type="email" name="Email клиента" placeholder="mail@example.ru" value={form.email} onChange={(event) => onChange('email', event.target.value)} />
          </label>
          <label className="modal__label">Комментарий
            <textarea className="modal__input modal__textarea" name="Комментарий" placeholder="Что вас интересует?" value={form.comment} onChange={(event) => onChange('comment', event.target.value)} />
          </label>
          {error && <p className="modal__error" role="alert">{error}</p>}
          <button className="button2 modal__submit" type="submit" disabled={isLoading}>{isLoading ? 'ОТПРАВЛЯЕМ...' : 'ОТПРАВИТЬ ЗАЯВКУ'}</button>
          <a className="modal__mail-link" href={`mailto:${EMAIL_TO}?subject=${encodeURIComponent(`Новая заявка: ${title}`)}&body=${encodeURIComponent(mailBody)}`}>Если отправка не пришла — открыть письмо вручную</a>
          <iframe className="formsubmit-frame" title="formsubmit" name="formsubmit-frame" />
        </form>
      )}
    </>
  );
};

const CartModal = ({ cartItems, dispatch }) => {
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="modal__section">
      <p className="modal__text modal__text--center">Товаров в корзине: {totalCount}</p>
      {cartItems.length ? (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-item__img" />
              <div className="cart-item__info">
                <b>{item.title}</b>
                <span>{item.price}</span>
                <div className="cart-item__controls">
                  <button type="button" onClick={() => dispatch(decreaseCartItem(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => dispatch(addToCart(item))}>+</button>
                  <button type="button" className="cart-item__remove" onClick={() => dispatch(removeFromCart(item.id))}>Удалить</button>
                </div>
              </div>
            </div>
          ))}
          <button className="button2 modal__submit" type="button" onClick={() => dispatch(openModal({ type: 'order', title: 'Заявка по корзине' }))}>ОФОРМИТЬ ЗАЯВКУ</button>
        </div>
      ) : (
        <div className="modal__empty">Корзина пока пустая. Добавьте товары из каталога.</div>
      )}
    </div>
  );
};

const SearchModal = ({ dispatch }) => {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return catalog;
    return catalog.filter((item) => `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(value));
  }, [query]);

  return (
    <div className="modal__section">
      <input className="modal__input search-input" type="search" autoFocus placeholder="Введите название товара" value={query} onChange={(event) => setQuery(event.target.value)} />
      <div className="search-results">
        {filtered.length ? filtered.map((item) => (
          <div className="search-card" key={item.id}>
            <img src={item.image} alt={item.title} className="search-card__img" />
            <div className="search-card__info">
              <b>{item.title}</b>
              <span>{item.price}</span>
              <small>{item.description}</small>
            </div>
            <button className="button2 search-card__button" type="button" onClick={() => dispatch(addToCart(item))}>В корзину</button>
          </div>
        )) : <div className="modal__empty">Ничего не найдено</div>}
      </div>
    </div>
  );
};

const InfoModal = ({ requestTitle, form, dispatch }) => (
  <div className="modal__success" role="status">
    <div className="modal__success-icon">✓</div>
    <p>{form.comment ? `${form.comment} добавлен в корзину.` : requestTitle}</p>
    <button className="button2 modal__submit" type="button" onClick={() => dispatch(openModal({ type: 'cart', title: 'Корзина' }))}>ПЕРЕЙТИ В КОРЗИНУ</button>
  </div>
);

const OrderModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, modalType, requestTitle, form, status, error, successMessage, cartItems } = useSelector((state) => state.order);

  useEffect(() => {
    if (!isModalOpen) return undefined;
    const handleEsc = (event) => {
      if (event.key === 'Escape') dispatch(closeModal());
    };
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen, dispatch]);

  const makeMailBody = () => {
    const cartText = cartItems.length
      ? cartItems.map((item) => `${item.title} — ${item.price}, количество: ${item.quantity}`).join('\n')
      : 'Корзина пуста';

    return [
      `Источник заявки: ${requestTitle}`,
      `Имя: ${form.name}`,
      `Телефон: ${form.phone}`,
      `Email клиента: ${form.email || 'Не указан'}`,
      `Комментарий: ${form.comment || 'Без комментария'}`,
      '',
      `Корзина:`,
      cartText,
    ].join('\n');
  };

  const handleChange = (name, value) => dispatch(updateFormField({ name, value }));
  const handleSubmit = () => {
    dispatch(markOrderSent());
  };
  const handleClose = () => dispatch(closeModal());

  if (!isModalOpen) return null;

  if (modalType === 'cart') {
    return <ModalShell title="Корзина" onClose={handleClose}><CartModal cartItems={cartItems} dispatch={dispatch} /></ModalShell>;
  }

  if (modalType === 'search') {
    return <ModalShell title="Поиск продукции" onClose={handleClose}><SearchModal dispatch={dispatch} /></ModalShell>;
  }

  if (modalType === 'info') {
    return <ModalShell title={requestTitle} onClose={handleClose}><InfoModal requestTitle={requestTitle} form={form} dispatch={dispatch} /></ModalShell>;
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
      <button className="modal__overlay" type="button" aria-label="Закрыть окно" onClick={handleClose} />
      <div className="modal__content">
        <button className="modal__close" type="button" aria-label="Закрыть" onClick={handleClose}>×</button>
        <OrderForm
          title={requestTitle}
          form={form}
          status={status}
          error={error}
          successMessage={successMessage}
          cartItems={cartItems}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={handleClose}
          mailBody={makeMailBody()}
        />
      </div>
    </div>
  );
};

export default OrderModal;
