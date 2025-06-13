import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button roboto-reg17" onClick={toggleDropdown}>
        Продукты 1С <span className="arrow">&#9660;</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to='/product'>
            <a href="#" className="dropdown-item roboto-reg17">Сельское и лесное хозяйство</a>
          </Link>
          <Link to='/productProduction'>
            <a href="#" className="dropdown-item roboto-reg17">Производство </a>
          </Link>
          <Link to='/productConstruction'>
            <a href="#" className="dropdown-item roboto-reg17">Строительство, ЖКХ</a>
          </Link>
          <Link to='/productMeals'>
            <a href="#" className="dropdown-item roboto-reg17">Общественное и плановое питание </a>
          </Link>
          <Link to='/productEducation'>
            <a href="#" className="dropdown-item roboto-reg17">Образование, культура</a>
          </Link>

        </div>
      )}
    </div>
  );
}

export default Menu;