import { PropTypes } from "prop-types";

const Todo = ({ id, content, done, doneHandler, removeTodo }) => {
  return (
    <>
      {!done ? content : <del>{content}</del>}
      <input
        type="checkbox"
        onChange={() => {
          doneHandler(id, content, done);
        }}
        value={done}
        checked={done}
      />
      <button
        onClick={() => {
          removeTodo(id);
        }}
      >
        Remove
      </button>
    </>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  doneHandler: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
