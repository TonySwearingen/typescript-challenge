import * as React from "react";
import { context } from "./Provider";

import TodoList from "./TodoList";
import NewTodo from "./NewTodo";

const {useContext} = React;

export default function Todo() {
  const {dispatch} = useContext(context);
  function handleClearButtonClick(event) {
    event.preventDefault();
    dispatch({ type: "CLEAR_TODOS" });
  }

  return (
    <div>
      <NewTodo />
      <button className="btn btn-danger" onClick={handleClearButtonClick}>Remove</button>
      <br />
      <br />
      <TodoList />
    </div>
  );
}
