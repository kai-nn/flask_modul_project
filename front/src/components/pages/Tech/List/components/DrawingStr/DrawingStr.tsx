import React, {FC} from "react";
import style from './DrawingStr.module.css'

interface IDrawingStr {
    drawing: string
}

const DrawingStr: FC<IDrawingStr> = ({drawing}) => {
    return (
        <div className={style.str}>{drawing}</div>
    )
}

export default DrawingStr