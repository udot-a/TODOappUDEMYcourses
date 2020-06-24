import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import ItemStatusFilter from "./components/ItemStatusFilter";
import TodoList from "./components/TodoList";
import css from "./components/style.module.css";
import ItemAddForm from "./components/ItemAddForm";

export const Context = React.createContext(null);

export default () => {
    const {todoApp} = css;
    const createItem = label => ({
        label,
        important: false,
        isDone: false,
        id: uuidv4()
    })
    const [todoData, setTodo] = useState([
        createItem("Drink coffee"),
        createItem("Learn React"),
        createItem("Have a launch"),
        createItem("Angular tutorial"),
    ]);

    const [searchString, setSearch] = useState("");

    const [filter, setFilter] = useState("All");

    const changeFilter = filterName => setFilter(filterName);

    const changeSearch = searchStr => setSearch(searchStr);

    const wrappedTodo = (filter, arr, searchStr="") => {
        let result = arr;

        if (filter === "Active") {
            result = arr.filter(({isDone}) => !isDone);
        }

        if (filter === "Done") {
            result = arr.filter(({isDone}) => isDone);
        }

        if (searchStr!=="") {
            result = result.filter(({ label }) => label.toUpperCase().includes(searchStr.toUpperCase()));
        }

        return result;
    }

    const setImportantDone = (id, flag = "important") => () => setTodo(todoData =>
      todoData.map(item => {
          if (item.id === id) {
              item[flag] = !item[flag];
          }

          return item;
      })
    );

    const delItem = id => () => setTodo(
        todoData.filter(item => item.id !== id)
    );

    const addItem = label => setTodo([
            ...todoData,
            createItem(label)
    ]);

    const doneCount = todoData.reduce((sum, item) => item.isDone ? ++sum : sum, 0)

    return (
        <Context.Provider
            value={{delItem, addItem, setImportantDone}}
        >
            <div className={todoApp}>
                <AppHeader toDo={todoData.length - doneCount} done={doneCount}/>

                <div className="top-panel d-flex">
                    <SearchPanel
                        searchString={searchString}
                        changeSearch={changeSearch}
                    />

                    <ItemStatusFilter
                        filter={filter}
                        changeFilter={changeFilter}
                    />
                </div>

                <TodoList
                    todoData={wrappedTodo(filter, todoData, searchString)}
                    delItem={delItem}
                    searchString={searchString}
                />

                <ItemAddForm/>
            </div>
        </Context.Provider>
    );

}