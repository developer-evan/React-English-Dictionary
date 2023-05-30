// import logo from './logo.svg';
// import './index.css';
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
    <div className="bg-slate-950 text-white items-start  p-8">
      <h2>English Dictionary:</h2>
      <div className="flex mt-2 pt-5  ">
      <input  className="bg-sky-500 border-none w-2/5 p-1 mr-3" value={keyword} onChange={(e) => setKeyword(e.target.value)}  />
     <div > 
      <button
        className="text-white  bg-sky-500 p-1 mr-3"
        type="submit"
        onClick={handleSearch}
        value="search"
      >
         Search
      </button>
      <button
        disabled={!result}
        className="bg-red-500 text-white p-1"
        type="submit"
        onClick={handleClear}
      >
        Clear
      </button>
     </div>
      </div>
      {result && <Words {...{ result }} />}
    </div>
  );
}

export default App;
