import React from "react";

import Header from "./app/components/Header/index";
import Footer from "./app/components/Footer/index";

import { HomePage } from "./app/pages/HomePage/HomePage";
import { CharactersPage } from "./app/pages/CharactersPage/CharactersPage";

function App() {
  return (
    <div className="App">
      <CharactersPage />
    </div>
  );
}

export default App;
