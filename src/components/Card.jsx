import { useEffect, useRef } from "react";
import "../styles/card.scss";

function Card(props) {
    const imgRef = useRef(null);

    useEffect(() => {
        const target = imgRef.current;

        if (props.observer) {
            // console.log(target);
            props.observer.observe(target);
        }

        return () => {
            if (props.observer) props.observer.unobserve(target);
        };
    }, [props.observer]);

    return (
        <>
            <div className="imgwrap" ref={imgRef}>
                <img data-src={props.img.pic} alt="" />
            </div>
        </>
    );
}
export default Card;
