import React, { useContext } from "react";
import ScrollthemeContext from "./ScrollthemeContext";
import "../styles/scroll.scss";

function ScrollAnime(props) {
    const themeContext = useContext(ScrollthemeContext);
    return (
        <>
            <div className="scroll">
                <div
                    className="line"
                    style={{
                        backgroundColor:
                            props.theme === "dark"
                                ? themeContext.dark.lineColor
                                : themeContext.light.lineColor,
                    }}
                >
                    <div className="line-anime"></div>
                </div>
                <span
                    className="scroll-words"
                    style={{
                        color:
                            props.theme === "dark"
                                ? themeContext.dark.fontColor
                                : themeContext.light.fontColor,
                    }}
                >
                    SCROLL
                </span>
            </div>
        </>
    );
}
export default ScrollAnime;
