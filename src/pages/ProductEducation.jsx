import "../styles/styleho.css";
import img1Education from '../img/product/Education/d6ad06ee815e19195911a511d979e463.png'
import img2Education from '../img/product/Education/7e73972feb047a6717a1897757005a01.png'
import img3Education from '../img/product/Education/f0fed3526c3027317be124db2149b365.png'
const ProductProduction = () => {
    return (
        <div className="wrapper">
            <div className="contentProduct1 _contentProductimg5">
                <div className="content-blockProduct _container">
                    <div className="block-txtProduct">
                        <div className="text-serif48m _color-beg _width635">Образование, культура</div>
                        <div className="roboto-reg20 _color-beg">Для организаций сферы образования и культуры компания 1С предлагает специальные программные решения, которые помогают автоматизировать учет, управление и отчётность. Эти продукты позволяют эффективно вести учёт студентов, сотрудников, финансовых операций и обеспечивают соответствие требованиям законодательства. </div>
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
                            <img className="product-img" src={img1Education} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Университет</div>
                            <div className="roboto-reg13">Комплексное решение для автоматизации управления вузом, включающее контуры: приемная кампания, учебный процесс, расписание.</div>
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
                            <img className="product-img" src={img2Education} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Набор для бухгалтерии образовательного учреждения</div>
                            <div className="roboto-reg13">Программный продукт «1С:Предприятие 8. Набор для бухгалтерии образовательного учреждения» представляет собой комплексное решение.</div>
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
                            <img className="product-img" src={img1Education} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Колледж</div>
                            <div className="roboto-reg13">Комплексное решение для управления деятельностью учреждений начального и среднего профессионального образования. Продукт охватывает все уровни.</div>
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
                            <img className="product-img" src={img2Education} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Управление образования</div>
                            <div className="roboto-reg13">«1С:Управление образования» - программный продукт, предназначенный для автоматизации административно-управленческой деятельности.</div>
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
                            <img className="product-img" src={img3Education} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Музей</div>
                            <div className="roboto-reg13">Программный продукт "1C:Музей" предназначен для автоматизации фондовой, экспозиционной, культурно-образовательной.</div>
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