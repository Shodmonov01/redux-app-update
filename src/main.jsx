import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import  { rootReducer } from "./redux/rootReducer.js";
import { createStore } from "redux";


const store = createStore(rootReducer)
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
