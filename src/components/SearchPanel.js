import React from "react";
import css from "./style.module.css";

export default ({changeSearch, searchString}) => {
    const {searchInput} = css;

    const handleChange = ({ target: { value } }) => {
        changeSearch(value);
    }

    return (
        <input
            className={`form-control ${searchInput}`}
            type={"text"}
            placeholder={"search..."}
            onChange={handleChange}
            value={searchString}
        />
    );
}
