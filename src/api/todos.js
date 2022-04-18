const baseURL = "http://localhost:3000/todos";

const getTodos = async () => {
  try {
    const response = await fetch(`${baseURL}/`);
    if (!response.ok) {
      throw Error(`${response.status} ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};

const updateSomeTodo = async (todoID, todoContents, todoDone) => {
  try {
    const response = await fetch(`${baseURL}/${todoID}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        content: todoContents,
        done: todoDone,
      }),
    });
    if (!response.ok) {
      throw Error(`${response.status} ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};

const addTodo = async (todoContents, todoDone) => {
  try {
    const response = await fetch(`${baseURL}/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        content: todoContents,
        done: todoDone,
      }),
    });
    if (!response.ok) {
      throw Error(`${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const removeTodo = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw Error(`${response.status} ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getTodos, updateSomeTodo, addTodo, removeTodo };
