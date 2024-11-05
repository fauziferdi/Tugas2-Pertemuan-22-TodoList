import React, { useState, createContext } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

export const LanguageCon = createContext();

function App() {
  const [language, setLanguage] = useState("id");
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1730787481212,
      text: "kerjakan praktek react",
      completed: false,
    },
  ]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(text);
    setText("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSuccessTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toogleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <LanguageCon.Provider value={{ language, toogleLanguage }}>
      <Navbar />
      <div className="container mt-5">
        <TodoForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          text={text}
        />
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleSuccessTodo={handleSuccessTodo}
        />
      </div>
    </LanguageCon.Provider>
  );
}

export default App;
