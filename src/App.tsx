import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos,setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const delTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(t => t.id !== id);
    });
  };

  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onClickDelete={delTodoHandler}/>
    </div>
  );
}

export default App;
