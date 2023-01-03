import React from "react";
import "./App.css";
import { HomePage } from "./app/pages/HomePage/HomePage";
import { CharactersPage } from "./app/pages/CharactersPage/CharactersPage";

function App() {
  return (
    <div className="App">
      <CharactersPage />
      <HomePage />
    </div>
  );
}

export default App;
