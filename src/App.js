import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

import { getTodos, removeTodo, updateSomeTodo } from "./api/todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const todos = await getTodos();
    const data = await todos.json();
    setTodos(data);
  };

  const changeTodoStatus = async (id, content, doneState) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const copyTodos = todos.map((todo) => {
      return { ...todo };
    });
    copyTodos[todoIndex].Done = !doneState;
    setTodos(copyTodos);
    await updateSomeTodo(id, content, !doneState);
  };

  const removeTodos = async (id) => {
    await removeTodo(id);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const copyTodos = todos.map((todo) => {
      return { ...todo };
    });
    copyTodos.splice(todoIndex, 1);
    setTodos(copyTodos);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>TODOS</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo
              id={todo.id}
              content={todo.Contents}
              done={todo.Done}
              doneHandler={changeTodoStatus}
              removeTodo={removeTodos}
            />
          </div>
        );
      })}
      <AddTodo updateTodo={getData} />
    </div>
  );
}

export default App;
