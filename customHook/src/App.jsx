import "./App.css";
import PersonalInfo from "./PersonalInfo";
import Sayac from "./Sayac";
import TitleOne from "./TitleOne";

function App() {
  return (
    <div className="App">
      <TitleOne />
      <hr />
      <Sayac />
      <hr />

      <PersonalInfo />
    </div>
  );
}

export default App;
