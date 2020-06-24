import React, {useContext, useState} from "react";
import css from "./style.module.css";
import {Context} from "../App";

export default () => {
    const [value, setValue] = useState("");
    const {itemAddForm} = css;
    const {addItem} = useContext(Context);

    const handleChange = ({target: {value}}) => setValue(value);

    const handleSubmit = e => {
        e.preventDefault();

        if (!value.trim()) {
            return;
        }

        addItem(value);

        setValue("");
    }

    return (
        <form
            className={`${itemAddForm} d-flex`}
            onSubmit={handleSubmit}
        >
            <input
                className={"form-control"}
                type="text"
                onChange={handleChange}
                placeholder={"Type your new todo item..."}
                value={value}
            />

            <button
                className={"btn btn-outline-secondary"}
                type={"submit"}
            >
                Add
            </button>
        </form>
    );
}

