import React from 'react';
import "../styles/styleho.css";
import img1Rural from '../img/product/celo/085d02cfdf6059fe248b542ae8e7cebb.png';
import img2Rural from '../img/product/celo/12fb509e18b5a47814c0bea45da8afa4.png';
import img3Rural from '../img/product/celo/8dc2a6afdd3f7a833650e91d4ca2982e.png';
import img4Rural from '../img/product/celo/37a1dbf4d9db67082f9c9d678459c609.png';
import img5Rural from '../img/product/celo/ae2d0913bd8b4a9a782d9d1e70545f26.png';
import img6Rural from '../img/product/celo/8dc2a6afdd3f7a833650e91d4ca2982e.png';
import img7Rural from '../img/product/celo/6de11c7aa4f0e623ea6325355e80e028.png';
import img8Rural from '../img/product/celo/9004b4d71247aeb50949811a15901371.png';
import img10Rural from '../img/product/celo/ae2f9640dbb01266fdd89a34752c4d5a.png';
import { useInView } from 'react-intersection-observer';

const ProductRural = () => {

    const [refTitle, inViewTitle] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refDescription, inViewDescription] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refButton, inViewButton] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refProductsTitle, inViewProductsTitle] = useInView({ triggerOnce: true, threshold: 0.2 });

    // Создаем хуки для каждого продукта
    const [refProduct1, inViewProduct1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refProduct2, inViewProduct2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refProduct3, inViewProduct3] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refProduct4, inViewProduct4] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refProduct5, inViewProduct5] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refProduct6, inViewProduct6] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refProduct7, inViewProduct7] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refProduct8, inViewProduct8] = useInView({ triggerOnce: true, threshold: 0.2 });


    return (
        <div className="wrapper">
            <div className="contentProduct1">
                <div className="content-blockProduct _container">
                    <div className={`block-txtProduct fade-in ${inViewTitle ? 'in-view' : ''}`} ref={refTitle}>
                        <div className="text-serif48m _color-beg _width635">Сельское и лесное хозяйство</div>
                        <div className={`roboto-reg20 _color-beg fade-in ${inViewDescription ? 'in-view' : ''}`} ref={refDescription}>Сельское и лесное хозяйство играют фундаментальную роль в обеспечении продовольственной безопасности, сохранении биоразнообразия и поддержании устойчивого развития регионов. Это не просто отрасли экономики, а жизненно важные сферы, определяющие благополучие общества и здоровье планеты.</div>
                    </div>
                    <button className={`buttonProduct fade-in ${inViewButton ? 'in-view' : ''}`} ref={refButton}>
                        <div className="text-serif20m _color-beg  text-serif13mAd">Подробнее</div>
                    </button>
                </div>
            </div>
            <div className="contentProduct2 ">
                <div className={`text-serif48m _brown fade-in ${inViewProductsTitle ? 'in-view' : ''}`} ref={refProductsTitle}>Продукты</div>
                <div className="block-productsProduct">
                    <div className={`products fade-in ${inViewProduct1 ? 'in-view' : ''}`} ref={refProduct1}>
                        <div className="rectangle-products">
                            <img className="product-img" src={img1Rural} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Управление мукомольно-крупяным предприятием</div>
                            <div className="roboto-reg13">«1С:Управление мукомольно-крупяным предприятием» предназначено для использования мукомольными и крупяными предприятиями.</div>
                            <div className="btn-txt">
                                <div className="roboto-medium13"> Приобрести</div>
                                <button className="bbtn">
                                    <div className="text-serif13m">Подробнее</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`products fade-in ${inViewProduct2 ? 'in-view' : ''}`} ref={refProduct2}>
                        <div className="rectangle-products">
                            <img className="product-img" src={img2Rural} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Управление сельскохозяйственным предприятием</div>
                            <div className="roboto-reg13">«1С:Управление сельскохозяйственным предприятием» – универсальное решение для организации комплексного управления и учета на предприятиях аграрного сектора.</div>
                            <div className="btn-txt">
                                <div className="roboto-medium13"> Приобрести</div>
                                <button className="bbtn">
                                    <div className="text-serif13m">Подробнее</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`products fade-in ${inViewProduct3 ? 'in-view' : ''}`} ref={refProduct3}>
                        <div className="rectangle-products">
                            <img className="product-img" src={img3Rural} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Управление птицефабрикой</div>
                            <div className="roboto-reg13">«1С:Предприятие 8. Управление птицефабрикой» - комплексное решение, охватывающее основные контуры управления и учета предприятия.</div>
                            <div className="btn-txt">
                                <div className="roboto-medium13"> Приобрести</div>
                                <button className="bbtn">
                                    <div className="text-serif13m">Подробнее</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`products fade-in ${inViewProduct4 ? 'in-view' : ''}`} ref={refProduct4}>
                        <div className="rectangle-products">
                            <img className="product-img" src={img4Rural} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Бухгалтерия сельскохозяйственного предприятия</div>
                            <div className="roboto-reg13">«1С:Предприятие 8. Бухгалтерия сельскохозяйственного предприятия» реализовано на платформе «1С:Предприятие 8» .</div>
                            <div className="btn-txt">
                                <div className="roboto-medium13"> Приобрести</div>
                                <button className="bbtn">
                                    <div className="text-serif13m">Подробнее</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`products fade-in ${inViewProduct5 ? 'in-view' : ''}`} ref={refProduct5}>
                        <div className="rectangle-products">
                            <img className="product-img" src={img5Rural} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Бухгалтерия элеватора и комбикормового завода</div>
                            <div className="roboto-reg13">«1С:Предприятие 8. Бухгалтерия элеватора и комбикормового завода» обеспечивает решение задач, стоящих перед службами элеватора.</div>
                            <div className="btn-txt">
                                <div className="roboto-medium13"> Приобрести</div>
                                <button className="bbtn">
                                    <div className="text-serif13m">Подробнее</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`products fade-in ${inViewProduct6 ? 'in-view' : ''}`} ref={refProduct6}>
                        <div className="rectangle-products">
                            <img className="product-img" src={img6Rural} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Бухгалтерия птицефабрики</div>
                            <div className="roboto-reg13">Программный продукт «1С:Предприятие 8. Бухгалтерия птицефабрики» предназначен для автоматизации бухгалтерского и налогового учета.</div>
                            <div className="btn-txt">
                                <div className="roboto-medium13"> Приобрести</div>
                                <button className="bbtn">
                                    <div className="text-serif13m">Подробнее</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`products fade-in ${inViewProduct7 ? 'in-view' : ''}`} ref={refProduct7}>
                        <div className="rectangle-products">
                            <img className="product-img" src={img7Rural} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Отчетность АПК. Базовая версия</div>
                            <div className="roboto-reg13">Программный продукт разработан с целью повышения качества и оперативности получения данных о финансово-экономическом состоянии.</div>
                            <div className="btn-txt">
                                <div className="roboto-medium13"> Приобрести</div>
                                <button className="bbtn">
                                    <div className="text-serif13m">Подробнее</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`products fade-in ${inViewProduct8 ? 'in-view' : ''}`} ref={refProduct8}>
                        <div className="rectangle-products">
                            <img className="product-img" src={img8Rural} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Молокозавод</div>
                            <div className="roboto-reg13">Комплексное ERP-решение для автоматизации управления и учета на молокоперерабатывающих предприятиях разных направлений деятельности.</div>
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

export default ProductRural;
