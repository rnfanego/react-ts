import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

const Todos: React.FC<{items: Todo[], onClickDelete: (id: string)=>void}> = (props) => {
    return (<ul className={classes.todos}>
        {props.items.map(item => <TodoItem key={item.id} item={item} onClickDelete={props.onClickDelete}/>)}
    </ul>)
}

export default Todos;