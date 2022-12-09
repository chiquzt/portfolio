import { useEffect, useState } from "react";
import data from "./b-imgs.json";

//components
import ScrollAnime from "../../components/ScrollAnime";
import CardS from "../../components/CardS";
function Banner() {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };
    const [observer, setObserver] = useState(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    function intoViewport(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsIntersecting(entry.isIntersecting);
                entry.target.children[0].setAttribute(
                    "src",
                    entry.target.children[0].dataset.src
                );
                entry.target.classList.add("fadeIn");
                observer.unobserve(entry.target);
            }
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(intoViewport, options);
        setObserver(observer);
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <>
            <div className="container">
                <div className="fake"></div>
                <div className="main" id="main">
                    <section>
                        <div className="card" style={{ columnCount: 3 }}>
                            {data.imgs.map((v, i) => {
                                return (
                                    <CardS
                                        key={v.id}
                                        img={v}
                                        observer={observer}
                                    />
                                );
                            })}
                        </div>
                    </section>
                </div>
                <ScrollAnime theme={"dark"} />
            </div>
        </>
    );
}
export default Banner;
