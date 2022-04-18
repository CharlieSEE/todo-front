import { useState } from "react";
import { PropTypes } from "prop-types";
import { addTodo } from "../api/todos";

const AddTodo = ({ updateTodo }) => {
  const [todoContents, setTodoContents] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todoContents.length < 1) return;
    await addTodo(todoContents, false);
    updateTodo();
    setTodoContents("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        minLength={1}
        type="text"
        onChange={(e) => {
          setTodoContents(e.target.value);
        }}
        value={todoContents}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

AddTodo.propTypes = {
  updateTodo: PropTypes.func,
};

export default AddTodo;
