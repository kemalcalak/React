import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const nameSurname = "Ali Kemal Çalak";
  const students = 43000;
  const dogruMu = true;
  const date = "date";
  const imgURL = "https://picsum.photos/250/250";
  return (
    // <>
    //   <h1>İsism Soyisim: {nameSurname}</h1>
    //   <p>öğrenci Sayısı: {students}</p>
    //   <p>Doğru mu: {dogruMu}</p>
    //   <p>Doğru mu: {dogruMu ? "Evet" : "Hayır"}</p>
    //   <input type="text" />
    //   <input type={date} />
    //   <img src={imgURL} alt="" />
    // </>
    // <div className="box"></div>
    <div style={{
       backgroundColor:'blue',
      width:'100px',
      height:'100px',
      fontSize:'20px',
    }}></div>
  );
}

export default App;
