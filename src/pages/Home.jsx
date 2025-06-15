import React from 'react';
import { motion } from 'framer-motion'; // Импортируем motion
import imghome1 from '../img/home/image.jpg'
import imghome2 from '../img/home/image 47.jpg'
import imghome3 from '../img/home/image (1).jpg'
import imghome4 from '../img/home/image (2).jpg'
import imghome5 from '../img/home/image 33.jpg'
import imghome6 from '../img/home/image (3).jpg'
import imghome7 from '../img/home/image (4).jpg'
import ServicesBlock from '../components/services-block/Services-block';
import ServicesBrown from '../components/services-brown/ServicesBrown';
import CertificateSlider from '../components/certificateSlider/CertificateSlider';
import '../../src/styles/styleho.css'; // Убедитесь, что путь к вашему файлу CSS правильный

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3, // Задержка для дочерних элементов
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="wrapper"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="content1-txt" variants={itemVariants}>
        <div className="text-serif64m text-serif36mAd">
          Система программ "1С:Предприятие"
        </div>
        <div className="roboto-reg20 _m25 _width487 roboto-reg12Ad">
          Система программ 1С:Предприятие предназначена для решения широкого
          профиля задач автоматизации управления и учёта.
        </div>
      </motion.div>

      <motion.div className="content-img" variants={itemVariants}>
        <img className="content1" src={imghome1} alt="" />
        <div className="content-block">
          <motion.div className="brown-block _container" variants={itemVariants}>
            <motion.div className="block-info _width300" variants={itemVariants}>
              <div className="text-serif22m">Опыт и профессионализм</div>
              <div className="roboto-light16">
                Опыт и профессионализм - основные черты группы компаний
                "Сервер". За нашей спиной 20-летний опыт работ на рынке
                IT-услуг.
              </div>
            </motion.div>
            <motion.div className="block-info _width390" variants={itemVariants}>
              <div className="text-serif22m">Мы готовы решать любые задачи</div>
              <div className="roboto-light16">
                Мы готовы решать любые задачи, в том числе и нестандартные.
                Восстановление поврежденных данных, сопровождение измененных
                конфигураций - мы можем помочь.
              </div>
            </motion.div>
            <img className="info-img" src={imghome2} alt="" variants={itemVariants}/>
            <motion.div className="block-info _width280" variants={itemVariants}>
              <div className="text-serif22m">Доступные цены</div>
              <div className="roboto-light16">
                С развитием телекоммуникационных каналов И наконец - доступные
                цены при неизменно высоком качестве обслуживания!
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="content2" variants={itemVariants}>
        <motion.div className="block-content1" variants={itemVariants}>
          <div className="text-serif48m text-serif24mAd">Почему выбирают нас?</div>
          <div className="roboto-light24 roboto-light20Ad">
            Внедрение и сопровождение продуктов 1С – основная специализация
            группы компаний "Сервер". Опытные квалифицированные специалисты,
            множество внедрений и постоянных клиентов.
          </div>
          <img className="about-img" src={imghome3} alt="" />
        </motion.div>
        <motion.div className="block-content2" variants={itemVariants}>
          <img className="about2-img" src={imghome4} alt="" />
          <div className="roboto-light24 roboto-light20Ad">
            У нас можно приобрести любые продукты от «1С» по единым
            рекомендованным ценам. Кроме того, специалисты фирмы разрабатывают
            собственные программные продукты, которые пользуются широким спросом
            на территории всей России - «1С:Расчет квартплаты и бухгалтерия
            ЖКХ».
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="content3" variants={itemVariants}>
        <motion.div className="block-text" variants={itemVariants}>
          <div className="text-serif48m text-serif24mAd">Услуги</div>
          <div className="roboto-light24 roboto-light20Ad">
            Эффективное применение современных программ и технологий невозможно
            без оперативного и качественного сопровождения. В работе часто
            возникают ситуации, когда помощь и участие квалифицированных
            специалистов необходимы.
          </div>
        </motion.div>
        <motion.div className="block-services" variants={itemVariants}>
          <div className="content-services1">
            <div className="services">
              <img className="serveces-img1" src={imghome5} alt="" />
              <ServicesBlock
                title="Система программ 1С:Предприятие"
                description="Система программ 1С:Предприятие  для решения широкого профиля задач автоматизации управления и учёта."
              />
            </div>
            <ServicesBrown
              title="Внедрение и сопровождение продуктов 1С"
              description="Внедрение и доработка под требования заказчика, информационно-технологическое сопровождение, удаленное обслуживание."
            />
          </div>
          <div className="content-services2">
            <img className="serveces-img2" src={imghome6} alt="" />
            <ServicesBlock
              title="Дополнительные сервисы"
              description="Облачные сервисы 1С, электронная 1С-Отчетность, сертифицированное обучение сотрудников."
            />
          </div>
          <div className="content-services3">
            <div className="services">
              <img className="serveces-img3" src={imghome7} alt="" />
              <ServicesBlock
                title="Продажа и поставка программ 1С"
                description="Реализация лицензионных программных продуктов 1С по рекомендованным ценам. Подбор оптимального решения для нужд вашего бизнеса."
              />
            </div>
            <ServicesBrown
              title="Обучение работе с 1С"
              description="Проведение курсов и тренингов для сотрудников вашей компании, повышение квалификации пользователей."
            />
          </div>
        </motion.div>
      </motion.div>

      <CertificateSlider />
    </motion.div>
  );
};

export default Home;
