import "./Illustration.scss";
import info from "./info.json";

//components
import IllustCard from "./IllustCard";

function Illustration() {
    return (
        <>
            <div className="container">
                <div className="fake"></div>
                <div className="main" id="main">
                    <section className="illust-cardwrap">
                        {info.cards.map((v, i) => {
                            return <IllustCard key={v.id} card={v} />;
                        })}
                    </section>
                </div>
            </div>
        </>
    );
}
export default Illustration;
