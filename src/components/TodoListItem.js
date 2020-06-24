import React, {useContext} from "react";
import cn from "classnames";
import css from "./style.module.css";
import {Context} from "../App";

export default ({label, id, isDone, important}) => {
    const {delItem, setImportantDone} = useContext(Context);

    const {tall, todoListItem, todoListItemLabel, done } = css;

    return (
        <span
            className={cn({[todoListItem]: true, [done]: isDone})}
        >
        <span
            className={cn({[todoListItemLabel]: true, [tall]: important})}
            onClick={setImportantDone(id, "isDone")}
        >
            {label}
        </span>

        <button
            type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={setImportantDone(id)}
        >
            <i className="fa fa-exclamation" />
        </button>

        <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={delItem(id)}
        >
            <i className="fa fa-trash-o" />
        </button>
    </span>
    );
}
