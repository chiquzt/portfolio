import { useEffect, useRef } from "react";
import "../styles/cards.scss";

function CardS(props) {
    const imgRef = useRef(null);

    useEffect(() => {
        const target = imgRef.current;

        if (props.observer) {
            props.observer.observe(target);
        }

        return () => {
            if (props.observer) props.observer.unobserve(target);
        };
    }, [props.observer]);

    return (
        <>
            <div className="imgwrap-s" ref={imgRef}>
                <img data-src={props.img.pic} alt="" />
            </div>
        </>
    );
}
export default CardS;
