import React from "react";


const Block = ({color,state}) => {
    let he, wi, style;
    if (window.innerHeight < window.innerWidth) {
        he = "1vh";
        wi = "1vh";
    } else {
        he = "1vw";
        wi = "1vw";
    }

    const handleClick = (e) => {
        e.preventDefault();
        state[1](!state[0]);
    }

    style = {"height": he, "width": wi, "backgroundColor": color};
    return <div style={style} onClick={handleClick}/>
}

export default Block
