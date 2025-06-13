import "../styles/styleho.css";
import imgContacts from '../img/contacts/image.jpg'
import mail from '../img/contacts/Vector.svg'
import vk from '../img/contacts/Vector (1).svg'
import tg from '../img/contacts/mingcute_telegram-fill.svg'
import wa from '../img/contacts/Vector (2).svg'
import AppMy from '../components/map/MyMap';
const Contacts = () => {
    return (

        <div class="wrapper">
            <img className="contentContacts" src={imgContacts} alt="" />
            <div className="contentContacts2 _container">
                <div className="infoContacts">
                    <div className="text-serif48m text-serif24mAd">Контакты</div>
                    <div className="list-textContacts">
                        <div className="roboto-reg24 roboto-reg16Ad">Адрес: Башкортостан, г. Мелеуз, 32 микрорайон, дом 36</div>
                        <div className="roboto-reg24 roboto-reg16Ad">Телефоны: +7 (34764) 3-06-47, +7 (34764) 3-18-91</div>
                        <div className="roboto-reg24 roboto-reg16Ad">E-mail: mail@meleuz.ru      </div>
                        <div className="roboto-reg24 roboto-reg16Ad">Режим работы: Пн. – Пт.: с 9:00 до 18:00 (мск+2)
                            Сб. - Вс.: выходные</div>
                    </div>
                    <div className="list-iconContacts">
                        <img src={mail} alt="" className="iconContacts" />
                        <img src={vk} alt="" className="iconContacts" />
                        <img src={tg} alt="" className="iconContacts" />
                        <img src={wa} alt="" className="iconContacts" />
                    </div>
                </div>
                <div className="formContacts">
                    <div className="text-serif48m text-serif24mAd">Свяжитесь с нами</div>
                    <div className="block-formContacts">
                        <input type="text" placeholder="Ваше имя" />
                        <input type="email" placeholder="Ваш e-mail" />
                        <input className="bigInput" type="text" placeholder="Ваше сообщение" />
                    </div>
                    <button class="buttonProduct">
                        <div class="text-serif20m _color-beg">Отправить</div>
                    </button>
                </div>
            </div>
            <AppMy/>
        </div>
    );
}

export default Contacts;