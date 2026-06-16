import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../src/styles/style.css";
import ProductsList from "../components/product/ProductsList";
import StocksList from "../components/stocks/StocksList";
import ContentCards from "../components/contentCards/ContentCards";
import InfoBlock from "../components/promoSection/InfoBlock";
import png1 from "../img/promoSection/7a804f4f-fffd-43a2-9d87-100c653461ad.jpg";
import png2 from "../img/promoSection/45b87102-d49b-4276-9193-78e56acf6d60.jpg";
import png3 from "../img/promoSection/b0b13367-5b44-47a7-a98d-71033d171c20.jpg";
import { openModal } from "../store/orderSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const infoBlocks = [
    {
      id: 'discount',
      title: 'Скидки до 40% на популярные позиции металлопроката',
      description: 'Мы предлагаем специальные условия на востребованные виды продукции. Акция действует на остатки и регулярные позиции.',
      buttonText: 'ПОСМОТРЕТЬ ПРЕДЛОЖЕНИЯ',
      image: png1,
      descriptionWidth: 'w389',
      imagePosition: 'right', 
      className: 'main-discount'
    },
    {
      id: 'production',
      title: 'Производство в России',
      description: 'Компания «Юмет» является надежным производителем и поставщиком металлопроката, работающим на российском рынке более четверти века.',
      buttonText: 'ПОДРОБНЕЕ',
      image: png2,
      descriptionWidth: 'w459',
      imagePosition: 'left',
      className: '',
      anchorId: 'production'
    },
    {
      id: 'quality',
      title: 'Секреты качества металлопроката',
      description: 'Узнайте о технологических процессах, контроле качества и особенностях производства различных видов металлопроката на нашем предприятии.',
      buttonText: 'ПОДРОБНЕЕ',
      image: png3,
      descriptionWidth: 'w459',
      imagePosition: 'right', 
      className: ''
    }
  ];

  const openRequest = (title, form = {}) => {
    dispatch(openModal({ title, form }));
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    openRequest(email ? `Подписка на рассылку: ${email}` : 'Подписка на рассылку', { email });
  };

  return (
    <main className="wrapper">
      <section className="content1 animate-section">
        <div className="content__vn">
          <div className="content__block">
            <div className="icon2" aria-hidden="true"></div>
            <div className="block-txt">
              <div className="interreg16">
                Производим металлопрокат в России с 1995 года
              </div>
              <h1 className="garamond36">
                Umet – Металлопрокат высокого качества
              </h1>
            </div>
            <button className="button" type="button" onClick={() => openRequest('Купить металлопрокат')}>КУПИТЬ СЕЙЧАС</button>
          </div>
        </div>
      </section>
      
      <section id="advantages" className="section-anchor animate-section">
        <ContentCards />
      </section>
      
      <InfoBlock 
        {...infoBlocks[0]}
        onButtonClick={() => openRequest('Предложения со скидкой')}
      />

      <section id="products" className="section-anchor">
        <ProductsList onOpenModal={openRequest} />
      </section>
      
      <InfoBlock 
        {...infoBlocks[1]}
        onButtonClick={() => openRequest('Информация о производстве')}
      />

      <section className="content3 animate-section">
       
        <div className="block__info">
          <div className="garamond28">НАША ИСТОРИЯ</div>
          <div className="interreg16 color-grey w459">
            Мы начинали с небольшого производства и выросли в предприятие полного цикла, оснащенное современным оборудованием.
          </div>
          <button className="interb14 margin23" type="button" onClick={() => openRequest('Подробнее о компании')}>ПОДРОБНЕЕ</button>
        </div>
         <div className="info__img" aria-hidden="true"></div>
      </section>
   
      <section id="stocks" className="section-anchor">
        <StocksList onOpenModal={openRequest} />
      </section>

      <InfoBlock 
        {...infoBlocks[2]}
        onButtonClick={() => openRequest('Секреты качества металлопроката')}
      />

      <section className="content6 animate-section">
        <div className="intersemi16">Подпишитесь на рассылку</div>
        <div className="garamond28">
          Актуальные предложения, новости отрасли и новинки
        </div>
        <form className="subscribe-form" onSubmit={handleSubscribe}>
          <input 
            className="txtmail" 
            type="email" 
            placeholder="Введите ваш email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button className="button2 margin8" type="submit">ПОДПИСАТЬСЯ</button>
        </form>
      </section>
    </main>
  );
};

export default Home;
