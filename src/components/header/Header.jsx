import React, { useState, useEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../img/logo.svg';
import '../../components/header/style.css';
import { Link } from 'react-router-dom';
import './style.css';
import Menu from '../menu-product/menuProduct';

const NAV_LINKS = [
    { id: 1, href: '/', text: '' },
    { id: 2, href: '/aboutCompany', text: 'О компании' },
    { id: 3, href: '/services', text: 'Услуги' },
    { id: 4, href: '/contacts', text: 'Контакты' },
];

const PRODUCT_LINKS = [
    { id: 5, href: '/product', text: 'Сельское и лесное хозяйство' },
    { id: 6, href: '/productProduction', text: 'Производство' },
    { id: 7, href: '/productConstruction', text: 'Строительство, ЖКХ' },
    { id: 8, href: '/productMeals', text: 'Общественное и плановое питание' },
    { id: 9, href: '/productEducation', text: 'Образование, культура' },
];

const NavLinks = ({ onClick }) => (
    <>
        {NAV_LINKS.map(({ id, href, text }) => {
            // Для главной страницы используем AnchorLink
            if (href === '/') {
                return (
                    <AnchorLink
                        key={id}
                        className='burger-menu__link roboto-reg17'
                        href={href}
                        onClick={onClick}
                    >
                        {text}
                    </AnchorLink>
                );
            }
            // Для остальных маршрутов используем обычный Link
            return (
                <Link
                    key={id}
                    className='burger-menu__link roboto-reg17'
                    to={href}
                    onClick={onClick}
                >
                    {text}
                </Link>
            );
        })}
    </>
);

const ProductLinks = ({ onClick }) => (
    <>
        {PRODUCT_LINKS.map(({ id, href, text }) => (
            <Link
                key={id}
                className='burger-menu__link roboto-reg17 burger-menu__submenu-link' // Добавлен класс для стилизации ссылок подменю
                to={href}
                onClick={onClick}
            >
                {text}
            </Link>
        ))}
    </>
);

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false); // Состояние для подменю "Продукты 1С"
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) &&
            burgerRef.current && !burgerRef.current.contains(event.target)) {
            setIsOpen(false);
            setIsProductsOpen(false); // Закрываем подменю при закрытии основного меню
        }
    };

    const toggleProducts = (e) => {
        e.preventDefault(); // Предотвращаем переход по ссылке (потому что это просто кнопка для открытия подменю)
        setIsProductsOpen(!isProductsOpen); // Toggle the state
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const closeMenu = () => {
        setIsOpen(false);
        setIsProductsOpen(false); // Also close the products submenu
    };


    return (
        <div className="burger-menu">
            <button
                ref={burgerRef}
                className={`burger-menu__button ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Menu"
                aria-expanded={isOpen}
            >
                <span className="burger-menu__bar" />
                <span className="burger-menu__bar" />
                <span className="burger-menu__bar" />
            </button>

            <nav
                ref={menuRef}
                className={`burger-menu__nav ${isOpen ? 'show-menu' : ''}`}
                aria-hidden={!isOpen}
            >
                <div className="burger-menu__links">
                    <NavLinks onClick={closeMenu} /> {/* Close menu on link click */}
                    <a
                        href="#" // Предотвращаем переход по ссылке
                        className="burger-menu__link roboto-reg17"
                        onClick={toggleProducts}
                    >
                        Продукты 1С
                    </a>
                    {isProductsOpen && (
                        <div className="burger-menu__submenu">
                            <ProductLinks onClick={closeMenu} /> {/* Close menu on link click */}
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

const Header = () => {
    return (
        <div className="wrapper">
            <header id="main-header">
            <div className="header">
                <Link to='/'>
                    <img className="logo" src={logo} alt="" />
                </Link>
                <div className="menuList">
                    <Link to='/aboutCompany'>
                        <div className="roboto-reg17">О компании</div>
                    </Link>
                    <div className="text">
                        <Menu />
                    </div>
                    <div className="text">
                        <div className="roboto-reg17 _color-beg">Продукты 1с</div>
                    </div>
                    <Link to='/services'>
                        <div className="roboto-reg17">Услуги</div>
                    </Link>
                    <Link to='/contacts'>
                        <div className="roboto-reg17">Контакты</div>
                    </Link>
                </div>
                <div className="contactInfo">
                    <div className="roboto-reg17">+7 (34764) 3-06-47, 3-60-66</div>
                    <div className="roboto-reg13">09:00 до 18:00 пн-пт (мск+2)</div>
                </div>
                <BurgerMenu />
            </div>
            </header>
        </div>
    );
};

export default Header;
