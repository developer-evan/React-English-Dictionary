// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import axios from "axios";
import Words from "./components/Words";

function App() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyword}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
    }
  }
  function handleClear() {
    setKeyword("");
    setResult(null);
  }

  return (
    <div className="App">
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button
        className="button"
        type="submit"
        onClick={handleSearch}
        value="search"
      >
        search
      </button>
      <button
        disabled={!result}
        className="button"
        type="submit"
        onClick={handleClear}
      >
        Clear
      </button>
      {result && <Words {...{ result }} />}
    </div>
  );
}

export default App;
