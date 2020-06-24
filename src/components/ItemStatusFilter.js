import React from "react";
import cn from "classnames";

export default ({filter, changeFilter}) => {
        const buttonNames = ["All", "Active", "Done"]

        const handleClick = ({target: { textContent } }) => {
                changeFilter(textContent);
        }

        const buttons = arr => arr.map((item, key) => {
                return (
                    <button
                        key={key}
                        type="button"
                        className={cn("btn", filter === item ? "btn btn-info" : "btn-outline-secondary")}
                        onClick={handleClick}
                    >
                            {item}
                    </button>

                )
        })

        return (
            <div className="btn-group">
                {buttons(buttonNames)}
            </div>
        );
}
