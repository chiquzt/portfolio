import { useEffect, useState } from "react";
import data from "./s-imgs.json";
import "./AnimeSocks.scss";

//components
import Card from "../../components/Card";
import ScrollAnime from "../../components/ScrollAnime";
// import SocksSlider from "./SocksSlider";

function AnimeSocks() {
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
            <body
                style={{
                    overflow: "hidden",
                }}
            >
                {" "}
                <div className="container">
                    <div className="fake"></div>
                    <div
                        className="main"
                        id="main"
                        style={{
                            backgroundColor: "#efece8",
                        }}
                    >
                        <section className="s-videoarea">
                            <div className="s-videowrap">
                                <div className="s-video">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/YIM-SX-WtGo"
                                        title="socks"
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
                        <ScrollAnime theme={"light"} />
                        {/* <section>
                            <SocksSlider />
                        </section> */}
                    </div>
                </div>
            </body>
        </>
    );
}
export default AnimeSocks;
