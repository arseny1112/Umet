import "../styles/styleho.css";
import img1Production from '../img/product/Production/dae42ca83f681b0f955c105a4f62f255.png'
import img2Production from '../img/product/Production/242a5657ed2b1013cde48408974fa1c3.png'
import img3Production from '../img/product/Production/a91e473fb66e3573d40f6b6fda414f3a.png'
import img4Production from '../img/product/Production/a30876bb53d7bd4e9901c04c3ed0e624.png'
import img5Production from '../img/product/Production/3b366db2e6447c578b85244c8c2c58b3.png'
const ProductProduction = () => {
    return (
        <div className="wrapper">
            <div className="contentProduct1 _contentProductimg2">
                <div className="content-blockProduct _container">
                    <div className="block-txtProduct">
                        <div className="text-serif48m _color-beg _width635">Производство</div>
                        <div className="roboto-reg20 _color-beg">Производственный процесс ООО “Сервер”, в частности в отношении разработки и поддержки программного продукта “1С:Расчет квартплаты и бухгалтерия ЖКХ”, представляет собой комплексный и многоэтапный цикл.</div>
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
                            <img className="product-img" src={img1Production} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Ликероводочный и винный завод</div>
                            <div className="roboto-reg13">Комплексное ERP-решение для автоматизации предприятий, занимающихся производством, а также продажей алкогольной продукции.</div>
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
                            <img className="product-img" src={img2Production} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Мясокомбинат</div>
                            <div className="roboto-reg13">Комплексное прикладное ERP-решение, охватывающее основные контуры управления и учета на предприятиях мясной промышленности.</div>
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
                            <img className="product-img" src={img3Production} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Хлебобулочное и кондитерское производство</div>
                            <div className="roboto-reg13">Комплексное ERP-решение, позволяющее организовать единую информационную систему для управления различными аспектами.</div>
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
                            <img className="product-img" src={img4Production} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Пиво-безалкогольный комбинат</div>
                            <div className="roboto-reg13">Комплексное ERP-решение, предназначенное для автоматизации управления и учета в организациях, занимающихся производством.</div>
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
                            <img className="product-img" src={img5Production} alt="" />
                        </div>
                        <div className="txt-products">
                            <div className="text-serif16m _h57">1С:Предприятие 8. Рыбопереработка</div>
                            <div className="roboto-reg13">Комплексное ERP-решение, предназначенное для автоматизации учета и управления на предприятиях рыбоперерабатывающей отрасли.</div>
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