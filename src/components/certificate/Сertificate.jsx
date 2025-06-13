import "./style.css";

const Certificate = ({title, description, img}) => {
  return (
    <div className="certificate">
      <img className="certificate-img" src={img}  alt="" />
      <div className="certificat-txt">
        <div className="text-serif24m">{title}</div>
        <div className="roboto-reg16">{description}</div>
      </div>
    </div>
  );
};

export default Certificate;
