import React from 'react';
import imgServices from '../img/services/image.jpg';
import imgServices2 from '../img/services/imgvage.jpg';
import imgServices3 from '../img/services/ifemage.jpg';
import imgServices4 from '../img/services/ree.jpg';
import imgServices5 from '../img/services/fgfb.jpg';
import "../styles/styleho.css";
import { useInView } from 'react-intersection-observer'; // Импорт useInView

const Services = () => {
    // Создаем хуки useInView для каждого элемента, который нужно анимировать
    const [refTitle, inViewTitle] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refText, inViewText] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refImage, inViewImage] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refImage2, inViewImage2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refImage3, inViewImage3] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refImage4, inViewImage4] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refDirectionTitle, inViewDirectionTitle] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refInfo1, inViewInfo1] = useInView({triggerOnce: true, threshold: 0.2})
    const [refInfo2, inViewInfo2] = useInView({triggerOnce: true, threshold: 0.2})
    const [refInfo3, inViewInfo3] = useInView({triggerOnce: true, threshold: 0.2})
    const [refInfo4, inViewInfo4] = useInView({triggerOnce: true, threshold: 0.2})

    return (
        <div className="wrapper">
            <div className="contentServices">
                <div className="block-contentServices">
                    <div className="txt-line">
                        <div className={`block-txtServices fade-in ${inViewTitle ? 'in-view' : ''}`} ref={refTitle}> {/* Добавляем анимацию к заголовку */}
                            <div className="text-serif64m _color-beg text-serif24mAd">Услуги</div>
                            <div className={`roboto-reg20 _color-beg _width470 roboto-reg12Ad fade-in ${inViewText ? 'in-view' : ''}`} ref={refText}>Эффективное применение современных программ и технологий невозможно без оперативного и качественного сопровождения. В работе часто возникают ситуации, когда помощь и участие квалифицированных специалистов необходимы. Пользователям требуются консультации по работе в "1С", методологии учета, обновления и другим вопросам.</div>
                        </div>
                        <div className="lineServices"></div>
                    </div>
                    <div className="txt-line2Services">
                        <div className="lineServices _mb17"></div>
                        <div className="lineServices2"></div>
                        <img className={`imgServices fade-in ${inViewImage2 ? 'in-view' : ''}`} ref={refImage2} src={imgServices2} alt="" />
                        <img className={`imgServices fade-in ${inViewImage3 ? 'in-view' : ''}`} ref={refImage3} src={imgServices3} alt="" />
                        <img className={`imgServices fade-in ${inViewImage4 ? 'in-view' : ''}`} ref={refImage4} src={imgServices4} alt="" />
                    </div>
                </div>
                <img className={`images-services fade-in ${inViewImage ? 'in-view' : ''}`} ref={refImage} src={imgServices} alt="" />  {/* Добавляем анимацию к большому изображению */}
            </div>
            <div className="content2services">
                <div className={`text-serif48m text-serif24mAd fade-in ${inViewDirectionTitle ? 'in-view' : ''}`} ref={refDirectionTitle}>Основные направления нашей работы:</div>
                <div className="img-info">
                    <img className="img-work" src={imgServices5} alt="" />
                    <div className="content-txt">
                        <div className={`block-infoservices fade-in ${inViewInfo1 ? 'in-view' : ''}`} ref={refInfo1}>
                            <div className="text-serif24m _brown">Внедрение и доработка</div>
                            <div className="roboto-reg20 _width523">Внедрение систем 1С позволит Вам решить множество проблем и автоматизировать практически любой бизнес-процесс.</div>
                        </div>
                        <div className="big-line"></div>
                        <div className={`block-infoservices fade-in ${inViewInfo2 ? 'in-view' : ''}`} ref={refInfo2}>
                            <div className="text-serif24m _brown" >Сопровождение</div>
                            <div className="roboto-reg20 _width523">Эффективное применение современных программ и технологий невозможно без оперативного и качественного сопровождения. </div>
                        </div>
                        <div className="big-line"></div>
                        <div className={`block-infoservices fade-in ${inViewInfo3 ? 'in-view' : ''}`} ref={refInfo3}>
                            <div className="text-serif24m _brown">Обучение</div>
                            <div className="roboto-reg20 _width523">1C:Предприятия обеспечивают повсеместную и удобную работу с прикладными решениями на различных клиентских устройствах.</div>
                        </div>
                        <div className="big-line"></div>
                        <div className={`block-infoservices fade-in ${inViewInfo4 ? 'in-view' : ''}`} ref={refInfo4}>
                            <div className="text-serif24m _brown">Сервисный центр</div>
                            <div className="roboto-reg20 _width523">Сервисный центр фирмы «Сервер» более 20 лет успешно оказывает услуги по ремонту компьютерного оборудования организациям и частным лицам. </div>
                        </div>
                        <div className="big-line"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Services;
