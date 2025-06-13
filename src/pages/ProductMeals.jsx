import "../styles/styleho.css";
import img1Meals from '../img/product/Meals/4a09902e3c8b3da3f24b4a5ed33db1da.png'
import img2Meals from '../img/product/Meals/7eaf28e2dc61dd0365b7fcf2e32e7d67.png'
const ProductMeals = () => {
    return (
        <div className="wrapper">
            <div className="contentProduct1 _contentProductimg4">
                <div className="content-blockProduct _container">
                    <div className="block-txtProduct">
                        <div className="text-serif48m _color-beg _width635">Общественное и плановое питание</div>
                        <div className="roboto-reg20 _color-beg">ООО “Сервер”, будучи официальным партнером “1С”, предлагает решения для автоматизации общественного и планового питания, позволяющие предприятиям этой сферы эффективно управлять процессами, снижать издержки и повышать качество обслуживания.</div>
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
                            <img className="product-img" src={img1Meals} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m">1С:Медицина. Диетическое питание</div>
                            <div className="roboto-reg13">Решение предназначено для учета продуктов и управления питанием в лечебных и оздоровительных учреждениях.</div>
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
                            <img className="product-img" src={img1Meals} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m">1С:Школьное питание</div>
                            <div className="roboto-reg13">Продукт предназначен для автоматизации процесса управления питанием в школах, организациях начального и среднего профессионального образования.</div>
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
                            <img className="product-img" src={img1Meals} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m">1С:Комбинат планового питания</div>
                            <div className="roboto-reg13">Специализированное решение для учета питания в высших учебных заведениях, индустриальных комбинатах питания, обеспечивающих поставку питания.</div>
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
                            <img className="product-img" src={img2Meals} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m">1С:Предприятие 8. Общепит</div>
                            <div className="roboto-reg13">Решение для автоматизации деятельности предприятий питания любых форматов и концепций. Позволяет автоматизировать рабочие места: главного бухгалтера.</div>
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

export default ProductMeals;