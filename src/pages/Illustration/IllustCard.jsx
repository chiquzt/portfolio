import { Link } from "react-router-dom";
function IllustCard(props) {
    return (
        <>
            <Link to={props.card.link}>
                <div className="illust-card">
                    <div className="illust-btn">{props.card.title}</div>
                    <div className="illust-img">
                        <img src={props.card.pic} alt="" />
                    </div>
                    <div className="illust-tag">{props.card.tags}</div>
                </div>
            </Link>
        </>
    );
}
export default IllustCard;
