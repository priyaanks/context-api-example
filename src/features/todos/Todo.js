import React, { useState, useContext } from "react";
import { AppContext } from "../../Provider";
import uniqid from "uniqid";
import styles from "./Todo.module.css";

export default function Todo() {
  const { appState, setAppState } = useContext(AppContext);
  const { todos } = appState;
  const [todoItem, setTodoItem] = useState("");

  const addTodoItem = () => {
    if (todoItem) {
      setAppState({
        ...appState,
        todos: appState.todos.concat({ id: uniqid(), item: todoItem }),
      });
      setTodoItem("");
    }
  };

  console.log("🧿🧿🧿 Rendering - TODO Component 🧿🧿🧿");

  return (
    <div>
      <h3>Your Todos</h3>
      <div className={styles.row}>
        <div className={styles.card}>
          <ul>
            {todos &&
              todos.map((todo) => {
                return <li key={todo.id}>{todo.item}</li>;
              })}
          </ul>
        </div>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Enter your todo'
          value={todoItem}
          placeholder='Enter your todo'
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button className={styles.button} onClick={addTodoItem}>
          Add Todo
        </button>
      </div>
    </div>
  );
}
