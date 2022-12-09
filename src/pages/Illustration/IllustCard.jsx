import { Link } from "react-router-dom";
function IllustCard(props) {
    return (
        <>
            <div className="illust-card">
                <Link to={props.card.link}>
                    <div className="illust-btn">{props.card.title}</div>
                </Link>
                <div className="illust-img">
                    <img src={props.card.pic} alt="" />
                </div>
                <div className="illust-tag">{props.card.tags}</div>
            </div>
        </>
    );
}
export default IllustCard;
