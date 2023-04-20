import React from "react";
import Todo from "../models/todo";
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{item: Todo, onClickDelete: (id: string)=>void}> = (props) => {
    const delHandler = () => {
        props.onClickDelete(props.item.id);
    };

    return (
        <li onClick={delHandler} className={classes.item}>{props.item.text}</li>
    );
}

export default TodoItem;