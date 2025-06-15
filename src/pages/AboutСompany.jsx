import "../styles/styleho.css";
import imgAbout from '../img/about/Group 99.jpg';
import imgAbout2 from '../img/about/Group 100.svg';
import imgpeople from '../img/about/Group 96.svg';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const AboutСompany = () => {
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
     const [ref4, inView4] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });return (
    <div className="wrapper">
        <div className={`contentAbout fade-in ${inView1 ? 'in-view' : ''}`} ref={ref1}>
            <div className="blockAbout1">
                <div className="text-serif48m _color-beg _width374 text-serif24mAd">Надоело тратить время на рутину и упускать возможности роста?</div>
                <div className="block-txtAbout">
                    <div className="roboto-reg20 _color-beg roboto-reg12Ad"> ООО “Сервер” – это команда экспертов с 25-летним опытом внедрения и разработки программного обеспечения</div>
                    <button className="buttonProduct">
                        <div className="text-serif20m _color-beg text-serif12mAd">Подробнее</div>
                    </button>
                </div>
            </div>
            <img src={imgAbout} alt="" className="imgAbout" />
        </div>
        <div className={`contentAbout2 _container fade-in ${inView2 ? 'in-view' : ''}`} ref={ref2}>
            <div className="text-people">
                <div className="text-serif48m _width580 text-serif24mAd">Индивидуальные решения для роста и эффективности</div>
                <div className="people">
                    <img className="people" src={imgpeople} alt="" />
                    <div className="block-txtPeople">
                        <div className="text-serif48m _color-red text-serif24mAd">25+</div>
                        <div className="roboto-light20 roboto-light15Ad">профильных
                            <br />специалистов</div>
                    </div>
                </div>
            </div>
            <div className="block-contentAbout">
                <img src={imgAbout2} alt="" className="imgAbout2" />
                <div className="txtAbout">
                    <div className="text-serif28m text-serif15mAd">Мы предлагаем индивидуальные решения на базе продуктов 1С и собственных разработок, адаптированные под специфику вашего бизнеса.</div>
                    <div className="roboto-light24 roboto-light13Ad">Автоматизируйте рутинные задачи, улучшите управление ресурсами и повысьте производительность ваших сотрудников.</div>
                </div>
            </div>
        </div>
        <div className={`contentAbout3 fade-in ${inView3 ? 'in-view' : ''}`} ref={ref3}>
            <div className="blockAbout3">
                <div className="text-serif48m text-serif24mAd">Отраслевые программные продукты 1С</div>
                <div className="roboto-reg24 roboto-reg15Ad">Нацелены на максимальное соответствие потребностям в автоматизации важных для предприятий бизнес-процессов. Позволяют сокращать издержки при внедрениях продуктов за счет того, что поставляются в качестве готовых решений.</div>
            </div>
            <div className="block-cardAbout">
                <div className={`cardlist1 fade-in ${inView4 ? 'in-view' : ''}`} ref={ref4}>
                    <div className="cardAbout">
                        <Link to='/product'>
                            <button className="btnAbout _imgAbout1">
                                <div className="text-serif24b text-serif15bAd">Сельское и лесное хозяйство</div>
                            </button>
                        </Link>
                    </div>
                    <div className="cardAbout _cardAbout2">
                        <Link to='/ProductProduction'>
                            <button className="btnAbout">
                                <div className="text-serif24b text-serif15bAd">Производство</div>
                            </button>
                        </Link>
                    </div>
                    <div className="cardAbout _cardAbout3 ">
                        <Link to='/ProductConstruction'>
                            <button className="btnAbout _imgAbout2">
                                <div className="text-serif24b text-serif15bAd">Строительство, ЖКХ</div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="cardlist1">
                    <div className="cardAbout2 ">
                        <Link to='/ProductMeals'>
                            <button className="btnAbout _imgAbout3">
                                <div className="text-serif24b text-serif15bAd">Общественное и плановое питание</div>
                            </button>
                        </Link>
                    </div>
                    <div className="cardAbout _cardAbout4">
                        <button className="btnAbout">
                            <Link to='/productEducation'>
                                <div className="text-serif24b text-serif15bAd">Образование, культура</div>
                            </Link>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

            }

export default AboutСompany;
