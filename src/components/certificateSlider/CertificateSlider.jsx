import React from 'react';
import Slider from 'react-slick';
import Certificate from '../certificate/Сertificate'
import imgcertificate1 from '../../img/home/1cer.jpg'; // Замените на ваши фактические пути
import imgcertificate2 from '../../img/home/2cer.jpg';
import imgcertificate3 from '../../img/home/3cer.jpg';
import imgcertificate4 from '../../img/home/4cer.jpg';
import imgcertificate5 from '../../img/home/5cer.jpg';
import imgcertificate6 from '../../img/home/6cer.jpg';
import imgcertificate7 from '../../img/home/7cer.jpg';

const CertificateSlider = () => {
    const settings = {
        dots: true,         // Показывать точки навигации
        infinite: true,     // Бесконечный слайдер
        speed: 500,         // Скорость анимации слайда (мс)
        slidesToShow: 4,      // Количество слайдов, видимых одновременно
        slidesToScroll: 1,    // Количество слайдов для прокрутки за раз
        autoplay: true,      // Автоматическая прокрутка
        autoplaySpeed: 3000,   // Интервал между слайдами при автоматической прокрутке (мс)
        pauseOnHover: true,  // Пауза при наведении мыши
        responsive: [
            {
                breakpoint: 1024,  // Для экранов меньше 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,   // Для экранов меньше 600px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,   // Для экранов меньше 320px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    };

    return (
        <div className="content4">
            <div className="block-text">
                <div className="text-serif48m">Наши сертификаты</div>
                <Slider {...settings} className="block-certificate">
                    <div><Certificate img={imgcertificate1} title="Сертификат" description="Лучший продукт 1С-Совместно 2016 г. (по версии пользователей)" /></div>
                    <div><Certificate img={imgcertificate2} title="Сертификат" description="Лучший продукт 1С-Совместно 2017 г. (по версии пользователей)" /></div>
                    <div><Certificate img={imgcertificate3} title="Сертификат" description="Лучший продукт 1С-Совместно 2018 г. (по версии пользователей)" /></div>
                    <div><Certificate img={imgcertificate4} title="Сертификат" description="Центр Сертифицированного Обучения Фирмы “1С”" /></div>
                    <div><Certificate img={imgcertificate5} title="Сертификат" description="Партнер Регионального Информационного Центра Общероссийской Сети" /></div>
                    <div><Certificate img={imgcertificate6} title="Сертификат" description="Орган по сертификации продукции и услуг ООО “БашЦентр”" /></div>
                    <div><Certificate img={imgcertificate7} title="Свидетельство" description="Официальный партнер фирмы 1С и зарегистрированы" /></div>
                </Slider>
            </div>
        </div>
    );
};

export default CertificateSlider;
