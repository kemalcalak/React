import "bulma/css/bulma.css";
import { useState } from "react";
import "./App.css";
import { Course } from "./Course";
import angular from "./assets/angular.jpg";
import bootstrap5 from "./assets/bootstrap5.png";
import kompleWeb from "./assets/kompleweb.jpg";
import cSharp from "./assets/ccsharp.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={angular}
                title="Angular"
                description=" 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde doloremque, quam commodi error aspernatur nemo doloribus mollitia voluptatibus quaerat itaque earum ut, voluptatum at qui, esse molestias porro magnam!"
              />
            </div>
            <div className="column">
              <Course
                image={bootstrap5}
                title="Bootstrap 5"
                description=" 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde doloremque, quam commodi error aspernatur nemo doloribus mollitia voluptatibus quaerat itaque earum ut, voluptatum at qui, esse molestias porro magnam!"
              />
            </div>
            <div className="column">
              <Course
                image={kompleWeb}
                title="Komple Web"
                description=" 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde doloremque, quam commodi error aspernatur nemo doloribus mollitia voluptatibus quaerat itaque earum ut, voluptatum at qui, esse molestias porro magnam!"
              />
            </div>
            <div className="column">
              <Course
                image={cSharp}
                title="C#"
                description=" 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde doloremque, quam commodi error aspernatur nemo doloribus mollitia voluptatibus quaerat itaque earum ut, voluptatum at qui, esse molestias porro magnam!"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
