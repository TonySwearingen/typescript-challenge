import * as React from 'react';
import { useState } from 'react';

function TodoJS() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    }
    // Add Todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  }

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  return (
    <>
      Add Todo
      <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todo..."
      />
      <br />
      <button className="btn btn-primary" type="submit" onClick={() => addTodo(input)}>Submit</button>
      
    </div>
    <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            {todo.completed ? (
                    <span className="todo-list__item__completed">✅</span>
                  ) : (
                    <span className="todo-list__item__not-completed"><input type="checkbox" /></span>
                  )}
                  <button className="" onClick={() => deleteTodo(todo.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoJS;


