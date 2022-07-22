import React, {useState} from "react";
import Block from "../Block/Block";
import './Grid.css';

const Grid = ({cols, rows}) => {
    const states = [];
    // useEffect(() => {
        for(let i = 0; i < rows; i++) {
            let tmp = [];
            for(let j = 0; j < cols; j++) {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                tmp.push(useState(false))
            }
            // eslint-disable-next-line react-hooks/rules-of-hooks
            states.push(tmp);
        }
    // },[]);

    console.log(states)

    return (
        <div className="row">
            {states.map((row, i) => {
                console.log("hello")
                return (<div className={'col'} key={i}>{
                    row.map((col, j) => {
                        return <Block key={`${i},${j}`} state={states[i][j]} color={states[i][j][0]?"black":"white"}/>
                    })}
                </div>)
            })}
        </div>

    )
}

export default Grid;
