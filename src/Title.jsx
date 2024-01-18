import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";

export const Title = (props) => {
  console.log("props Title >", props);
  
  const title = useSelector( state=> {
    console.log("state >> ", state);
    const { textReducer } = state;
    return textReducer.text;
  });
  const dispatch = useDispatch();


  const handleChange = (e) => {
    console.log("handle text >", e.target.value);
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="title">
      <div className="card-title">
        <input type="text" onChange={handleChange} />
        <div>{title}</div>
      </div>
    </div>
  );
};
