import React from "react";
import TodoListItem from "./TodoListItem";
import css from "./style.module.css";

export default ({todoData, searchString}) => {
    const {
        todoList,
    } = css;

    const listElements = arr => arr.map(item => {
        return (
            <li
                key={item.id}
                className={"list-group-item"}
            >
                <TodoListItem {...item}/>
            </li>
        )
    });

    if (!todoData.length) {
        if (searchString.length > 0) {
            return (
                <h4 className={"d-flex justify-content-center align-items-center m-5" }>
                    {"Search items not found!!!"}
                </h4>
            )
        }
        return (
            <h4 className={"d-flex justify-content-center align-items-center m-5" }>
                {"List is empty!!!"}
            </h4>
        )
    }

    return (
        <ul className={`list-group ${todoList}`}>
            {listElements(todoData)}
        </ul>

    );
}
