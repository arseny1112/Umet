import React, { useEffect, useRef, useState } from 'react';
import logo from '../../img/logo.svg';
import heart from '../../img/header/Heart.svg';
import search from '../../img/header/Search.svg';
import cart from '../../img/header/Shopping cart.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/orderSlice';
import './style.css';

const menuItems = [
  { title: 'Преимущества', href: '#advantages' },
  { title: 'Продукция', href: '#products' },
  { title: 'Акции', href: '#stocks' },
  { title: 'Производство', href: '#production' },
];

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleEsc = (event) => {
      if (event.key === 'Escape') closeMenu();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="burger-menu">
      <button
        ref={burgerRef}
        className={`burger-menu__button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
        type="button"
      >
        <span className="burger-menu__bar" />
        <span className="burger-menu__bar" />
        <span className="burger-menu__bar" />
      </button>

      <nav ref={menuRef} className={`burger-menu__nav ${isOpen ? 'show-menu' : ''}`} aria-label="Мобильное меню">
        <div className="burger-menu__links">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="burger-menu__link" onClick={closeMenu}>
              {item.title}
            </a>
          ))}
          <button
            className="button2 burger-menu__request"
            type="button"
            onClick={() => {
              closeMenu();
              dispatch(openModal({ title: 'Заявка на консультацию' }));
            }}
          >
            Оставить заявку
          </button>
        </div>
      </nav>
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.order.cartItems.reduce((sum, item) => sum + item.quantity, 0));

  const openRequest = (title, type = 'order') => {
    dispatch(openModal({ title, type }));
  };

  return (
    <div className="wrapper header-wrapper">
      <header className="header">
        <Link to="/" aria-label="На главную">
          <img className="logo" src={logo} alt="Umet" />
        </Link>

        <nav className="menuList" aria-label="Главное меню">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="text__menu">
              {item.title}
            </a>
          ))}
        </nav>

        <div className="icon">
          <button className="icon__button" type="button" onClick={() => openRequest('Избранное')} aria-label="Избранное">
            <img src={heart} alt="" className="img-icon" />
          </button>
          <button className="icon__button" type="button" onClick={() => openRequest('Поиск продукции', 'search')} aria-label="Поиск">
            <img src={search} alt="" className="img-icon" />
          </button>
          <button className="icon__button" type="button" onClick={() => openRequest('Корзина', 'cart')} aria-label="Корзина">
            <img src={cart} alt="" className="img-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>

        <BurgerMenu />
      </header>
    </div>
  );
};

export default Header;
