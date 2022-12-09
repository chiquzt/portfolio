import React from "react";

export const themes = {
    light: {
        fontColor: "#28272b",
        lineColor: "#efece8",
    },

    dark: {
        fontColor: "white",
        lineColor: "#28272b",
    },
};

const ScrollthemeContext = React.createContext();

export default ScrollthemeContext;
