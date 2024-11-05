import React, { useContext } from "react";
import { LanguageCon } from "../App";

const Navbar = () => {
  const { language, toogleLanguage } = useContext(LanguageCon);
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container">
        <span class="navbar-brand mb-0 h1 fw-bold fs-3">WebToDO</span>
        <button onClick={toogleLanguage} className="btn btn-light btn-sm">
          {language === "id" ? "indonesia" : "English"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
