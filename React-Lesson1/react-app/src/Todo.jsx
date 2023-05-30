/* eslint-disable react/prop-types */
import classes from "./Todo.module.css";

export const ToDo = ({title, description, done=false}) => {
    return (
        <>
            <h3>{title}</h3>
            <input type="checkbox" checked={done} readOnly/>
            <span className={`${done && classes.done}`}>{description}</span>
        </>
    )
}