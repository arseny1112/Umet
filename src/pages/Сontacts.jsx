import "../styles/styleho.css";
import imgContacts from '../img/contacts/image.jpg'
import mail from '../img/contacts/Vector.svg'
import vk from '../img/contacts/Vector (1).svg'
import tg from '../img/contacts/mingcute_telegram-fill.svg'
import wa from '../img/contacts/Vector (2).svg'
import AppMy from '../components/map/MyMap';
import { motion } from 'framer-motion'; // Импортируем motion из framer-motion

const Contacts = () => {
    const fadeInVariants = {
        initial: {
            opacity: 0,
            y: 20, // Небольшой сдвиг вверх, для более плавного появления
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5, // Длительность анимации (в секундах)
                ease: "easeInOut", // Тип easing (плавность анимации)
            },
        },
    };

    return (
        <motion.div
            className="wrapper"
            variants={fadeInVariants}
            initial="initial"
            animate="animate"
        >
            <motion.img
                className="contentContacts"
                src={imgContacts}
                alt=""
                variants={fadeInVariants}
            />
            <motion.div
                className="contentContacts2 _container"
                variants={fadeInVariants}
            >
                <motion.div
                    className="infoContacts"
                    variants={fadeInVariants}
                >
                    <motion.div
                        className="text-serif48m text-serif24mAd"
                        variants={fadeInVariants}
                    >
                        Контакты
                    </motion.div>
                    <motion.div
                        className="list-textContacts"
                        variants={fadeInVariants}
                    >
                        <motion.div
                            className="roboto-reg24 roboto-reg16Ad"
                            variants={fadeInVariants}
                        >
                            Адрес: Башкортостан, г. Мелеуз, 32 микрорайон, дом 36
                        </motion.div>
                        <motion.div
                            className="roboto-reg24 roboto-reg16Ad"
                            variants={fadeInVariants}
                        >
                            Телефоны: +7 (34764) 3-06-47, +7 (34764) 3-18-91
                        </motion.div>
                        <motion.div
                            className="roboto-reg24 roboto-reg16Ad"
                            variants={fadeInVariants}
                        >
                            E-mail: mail@meleuz.ru
                        </motion.div>
                        <motion.div
                            className="roboto-reg24 roboto-reg16Ad"
                            variants={fadeInVariants}
                        >
                            Режим работы: Пн. – Пт.: с 9:00 до 18:00 (мск+2) Сб. - Вс.: выходные
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="list-iconContacts"
                        variants={fadeInVariants}
                    >
                        <motion.img
                            src={mail}
                            alt=""
                            className="iconContacts"
                            variants={fadeInVariants}
                        />
                        <motion.img
                            src={vk}
                            alt=""
                            className="iconContacts"
                            variants={fadeInVariants}
                        />
                        <motion.img
                            src={tg}
                            alt=""
                            className="iconContacts"
                            variants={fadeInVariants}
                        />
                        <motion.img
                            src={wa}
                            alt=""
                            className="iconContacts"
                            variants={fadeInVariants}
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    className="formContacts"
                    variants={fadeInVariants}
                >
                    <motion.div
                        className="text-serif48m text-serif24mAd"
                        variants={fadeInVariants}
                    >
                        Свяжитесь с нами
                    </motion.div>
                    <motion.div
                        className="block-formContacts"
                        variants={fadeInVariants}
                    >
                        <input type="text" placeholder="Ваше имя" />
                        <input type="email" placeholder="Ваш e-mail" />
                        <input className="bigInput" type="text" placeholder="Ваше сообщение" />
                    </motion.div>
                    <motion.button
                        className="buttonProduct"
                        variants={fadeInVariants}
                    >
                        <motion.div
                            className="text-serif20m _color-beg text-serif13mAd"
                            variants={fadeInVariants}
                        >
                            Отправить
                        </motion.div>
                    </motion.button>
                </motion.div>
            </motion.div>
            <AppMy />
        </motion.div>
    );
};

export default Contacts;
