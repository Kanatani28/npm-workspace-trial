import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { HelloResponse } from "../../schemas/@types";

function App() {
  const [hello, setHello] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<HelloResponse>("http://localhost:3002");
      setHello(response.data.hello);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {hello}
        </a>
      </header>
    </div>
  );
}

export default App;
