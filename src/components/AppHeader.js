import React from "react";
import css from "./style.module.css";

export default ({ toDo, done}) => {
    const {appHeader} = css;
    return (
        <div className={`${appHeader} d-flex`}>
            <h1>Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
}
