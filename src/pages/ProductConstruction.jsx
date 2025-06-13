import "../styles/styleho.css";
import img1Construction from '../img/product/Construction/e7f1250080b23488ebde51c617509115.png'
import img2Construction from '../img/product/Construction/995d5d87b5c48b8b69a128079fdfd493.png'
const ProductProduction = () => {
    return (
        <div className="wrapper">
            <div className="contentProduct1 _contentProductimg3">
                <div className="content-blockProduct _container">
                    <div className="block-txtProduct">
                        <div className="text-serif48m _color-beg _width635">Строительство, ЖКХ</div>
                        <div className="roboto-reg20 _color-beg">ООО “Сервер” – надежный партнер с более чем 25-летним опытом внедрения и разработки программного обеспечения. Является официальным партнером “1С”, экспертом в автоматизации бизнеса и разработчиком специализированных решений, особенно для сферы ЖКХ. Компания предлагает инновационные и проверенные временем подходы, обеспечивая эффективную работу своих клиентов.</div>
                    </div>
                    <button className="buttonProduct">
                        <div className="text-serif20m _color-beg  text-serif13mAd">Подробнее</div>
                    </button>
                </div>
            </div>
            <div className="contentProduct2 ">
                <div className="text-serif48m _brown">Продукты</div>
                <div className="block-productsProduct">
                    <div className="products">
                        <div className="rectangle-products">
                            <img className="product-img" src={img1Construction} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m">1С:Предприятие 8. Расчет квартплаты и бухгалтерия ЖКХ</div>
                            <div className="roboto-reg13">«1С:Расчет квартплаты и бухгалтерия ЖКХ» – современный программный продукт, автоматизирующий расчет начислений по квартплате.</div>
                            <div className="btn-txt">
                                <div className="roboto-medium13"> Приобрести</div>
                                <button className="bbtn">
                                    <div className="text-serif13m">Подробнее</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="rectangle-products">
                            <img className="product-img" src={img2Construction} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m">1С:Предприятие 8. Бухгалтерия строительной организации</div>
                            <div className="roboto-reg13">«1С:Бухгалтерия строительной организации» – решение, предназначенное для автоматизации бухгалтерского и налогового учета в малых и средних организациях.</div>
                            <div className="btn-txt">
                                <div className="roboto-medium13"> Приобрести</div>
                                <button className="bbtn">
                                    <div className="text-serif13m">Подробнее</div>
                                </button>
                            </div>
                        </div>
                    </div>
                     <div className="products">
                        <div className="rectangle-products">
                            <img className="product-img" src={img1Construction} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m">1С:Предприятие 8. Расчет квартплаты и бухгалтерия ЖКХ</div>
                            <div className="roboto-reg13">«1С:Расчет квартплаты и бухгалтерия ЖКХ» – современный программный продукт, автоматизирующий расчет начислений по квартплате.</div>
                            <div className="btn-txt">
                                <div className="roboto-medium13"> Приобрести</div>
                                <button className="bbtn">
                                    <div className="text-serif13m">Подробнее</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="rectangle-products">
                            <img className="product-img" src={img2Construction} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m">1С:Предприятие 8. Бухгалтерия строительной организации</div>
                            <div className="roboto-reg13">«1С:Бухгалтерия строительной организации» – решение, предназначенное для автоматизации бухгалтерского и налогового учета в малых и средних организациях.</div>
                            <div className="btn-txt">
                                <div className="roboto-medium13"> Приобрести</div>
                                <button className="bbtn">
                                    <div className="text-serif13m">Подробнее</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductProduction;