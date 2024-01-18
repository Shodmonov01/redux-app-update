import "./App.css";
import imgcha from "../public/vite.svg";
import Linkes from "./Linkes";
import { Title } from "./Title";
import { Comments } from "./comments";


function App() {
  return (
    <>
      <div className="App">
        <div className="wrap">
          <div className="card">
            <div className="card-image">
              <img src={imgcha} alt="" />
              <Linkes />
              <Title/>
            </div>
              <Comments/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
