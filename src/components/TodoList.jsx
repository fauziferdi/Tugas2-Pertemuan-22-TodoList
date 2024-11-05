import React, { useContext } from "react";
import { LanguageCon } from "../App";

function TodoList({ todos, handleDeleteTodo, handleSuccessTodo }) {
  const { language } = useContext(LanguageCon);
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <div>
            <button
              className="btn btn-danger btn-sm me-2"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              {language === "en" ? "Delete" : "Hapus"}
            </button>
            {todo.completed ? (
              ""
            ) : (
              <button
                className="btn btn-success btn-sm"
                onClick={() => handleSuccessTodo(todo.id)}
              >
                {language === "en" ? "Complete" : "Selesai"}
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
