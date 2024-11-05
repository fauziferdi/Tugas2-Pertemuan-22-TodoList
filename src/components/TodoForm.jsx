import React, { useContext } from "react";
import { LanguageCon } from "../App";

function TodoForm({ handleSubmit, handleChange, text }) {
  const { language } = useContext(LanguageCon);
  return (
    <>
      <h1 className="text-center mb-4 fw-bold fs-1">
        {language === "id" ? "Daftar Kegiatan" : "Todo List"}
      </h1>

      <form className="d-flex mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Tambah todo..."
          onChange={handleChange}
          value={text}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
