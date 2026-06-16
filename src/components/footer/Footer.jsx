import logo from '../../img/footer/image 6.svg';
import './style.css';

const Footer = () => {
  return (
    <div className="wrapper">
      <footer className="footer">
        <div className="footerContent _container">
          <div className="blockFooter g10">
            <img className="logo footer__logo" src={logo} alt="Umet" />
            <div className="interreg16 w300">Мы производим и поставляем качественный металлопрокат для промышленности и строительства с 1995 года.</div>
          </div>

          <div className="blockFooter">
            <div className="intersemi16 white"></div>
            <div className="list-menuFooter">
            </div>
          </div>
          <div className="blockFooter">
            <div className="intersemi16 white">ПРОДУКЦИЯ</div>
            <div className="list-menuFooter">
              <a className="interreg16" href="#products">Сортовой прокат</a>
              <a className="interreg16" href="#products">Листовой металл</a>
              <a className="interreg16" href="#products">Трубы</a>
              <a className="interreg16" href="#products">Фасонный прокат</a>
            </div>
          </div>
          <div className="blockFooter">
            <div className="intersemi16 white">КЛИЕНТАМ</div>
            <div className="list-menuFooter">
              <a className="interreg16" href="#stocks">Доставка</a>
              <a className="interreg16" href="#stocks">Оплата</a>
              <a className="interreg16" href="#stocks">Гарантии</a>
              <a className="interreg16" href="#stocks">Партнерство</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
