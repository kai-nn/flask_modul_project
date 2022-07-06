import React from "react";
import style from './Main.module.css'
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import List from "../pages/Tech/List/List";

const Main = () => {
    return (
        <div className={style.window}>
            <div></div> {/* адаптивные поля */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="list" element={<List />} />
                <Route path="detail" element={<Detail />} />
            </Routes>
            <div></div> {/* адаптивные поля */}
        </div>
    )
}

export default Main