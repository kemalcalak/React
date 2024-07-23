import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [ali, setAli] = useState(0);
  const [kemal, setKemal] = useState(0);
  useEffect(() => {
    console.log("her renderda çalışır");
  }); // her renderda çalışır

  useEffect(() => {
    console.log("sadece ilk renderda çalışır");
  },[]); // sadece ilk renderda çalışır

  useEffect(() => {
    console.log("ali değiştiğinde çalışır");
  },[ali]); // sadece ali değiştiğinde çalışır

  useEffect(() => {
    console.log("ali veya kemal değiştiğinde çalışır");
  },[ali,kemal]); // sadece ali veya kemal değiştiğinde çalışır

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setAli(ali + 1)}>Ali ++</button>
        <div>Ali:{ali}</div>
      </div>
      <div className="secondDiv">
        <button onClick={() => setKemal(kemal + 1)}>Kemal ++</button>
        <div>Kemal:{kemal}</div>
      </div>
    </div>
  );
}

export default App;
