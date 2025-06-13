import "./style.css";

const ServicesBrown = ({ title, description }) => {
    return (
        <div className="services2">
            <div className="serveces-txt _m0">
                <div className="text-serif20m _color-beg">{title}</div>
                <div className="roboto-reg16 _color-beg">{description}</div>
                <div className="roboto-reg14 _color-beg">Узнать подробнее</div>
            </div>
        </div>

    );
};

export default ServicesBrown;