import logo from '../../img/footer/Group 6.svg'
import '../../components/footer/style.css'
const Footer = () => {
  return (
    <div class="wrapper">
      <div className="footer">
        <div className="footerContent _container">
 <img className="logo" src={logo} alt="" />
        <div className="blockFooter">
          <div className="text-serif20b ">Разделы</div>
          <div className="list-menuFooter">
            <div className="roboto-reg16">О компании</div>
            <div className="roboto-reg16">Продукты</div>
            <div className="roboto-reg16">Услуги</div>
            <div className="roboto-reg16">Контакты</div>
          </div>
        </div>
        <div className="blockFooter">
          <div className="text-serif20b ">Как с нами связаться</div>
          <div className="list-menuFooter">
            <div className="roboto-reg16">+7 (34764) 3-06-47, 3-18-91 </div>
            <div className="roboto-reg16">09:00 до 18:00 пн-пт (мск+2)</div>
            <div className="roboto-reg16">Российская Федерация
              <br />Башкортостан, г. Мелеуз</div>
            <div className="roboto-reg16">32 микрорайон, дом 36</div>
            <div className="roboto-reg16">E-mail: mail@meleuz.ru</div>
          </div>
        </div>
        <div className="blockFooter">
          <div className="list-menuFooter _m40">
            <div className="roboto-reg16 _text-line">Политика персональных данных ООО «ИТС-Про»</div>
            <div className="roboto-reg16 _text-line">Политика персональных данных ИП Гарипов Г.Г.</div>
            <div className="roboto-reg16 _text-line">Политика персональных данных ООО «Сервер»</div>
            <div className="roboto-reg16 _text-line">Согласие на обработку данных ИП Гарипов Г.Г.</div>
            <div className="roboto-reg16 _text-line">Согласие на обработку данных ООО «ИТС-Про»</div>
            <div className="roboto-reg16 _text-line">Согласие на обработку данных ООО «Сервер»</div>
          </div>
        </div>
        </div>

       
      </div>
    </div>

  );
}

export default Footer;