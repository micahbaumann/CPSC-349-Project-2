import "./SkillCard.css";

const SkillCard = (props) => {
    return (
        <div className="skillDiv">
            <div className="imageDiv">
                <img src={props.src} alt={props.alt} />
            </div>
            <h2>{props.Title}</h2>
        </div>
    );
}
 
export default SkillCard;