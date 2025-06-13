import "./style.css"

const Card = ({title},{img}) => {
    return ( 
        <div className="card-block _nbb">
        <div className="frame-img">
            <div className="frame-block"></div>
            <a className="img-block" href="">
                <img className="az" src={img} alt={title}/>
            </a>
        </div>
        <div className="block-text">{title}</div>
    </div>
     );
}
 
export default Card;