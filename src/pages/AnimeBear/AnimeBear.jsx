import { useEffect, useState } from "react";
import "./AnimeBear.scss";
import data from "./ab-imgs.json";
//components
import Card from "../../components/Card";
import ScrollAnime from "../../components/ScrollAnime";

function AnimeBear() {
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
                <div
                    className="main"
                    id="main"
                    style={{ backgroundColor: "#efece8" }}
                >
                    <section className="videoarea">
                        <div className="videowrap">
                            <div className="video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/y5DFCwNsg-s"
                                    title="bear"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="cardwrap">
                            <div
                                className="card"
                                style={{ padding: "5% 0 0 0" }}
                            >
                                {data.imgs.map((v, i) => {
                                    return (
                                        <Card
                                            key={v.id}
                                            img={v}
                                            observer={observer}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
                <ScrollAnime theme={"light"} />
            </div>
        </>
    );
}
export default AnimeBear;
