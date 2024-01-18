import React from "react";
import { connect } from "react-redux";
import { likesReducer } from "./redux/likeReducer";
import { incrementLikes, decrementLikes } from "./redux/actions";

export const Linkes = (props) => {
  console.log(props);
  return (
    <>
      <div className="like-button">
        <button onClick={props.onIncrementLikes}>Like {props.likes}</button>
        <button onClick={props.onDecrementLikes}>DisLike</button>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  console.log("mapStateToProps >", state);
  const { likesReducer } = state;
  return {
    // likes: state.likes,
    likes: likesReducer.likes,
  };
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps >", dispatch);
  // return {
  //   onIncrementLikes: () => {
  //     console.log("click");
  //     // const action = { type: "INCREMENT" };
  //     // dispatch(action);
  //     dispatch (incrementLikes)

  //   },
  //   onDecrementLikes: () => {
  //     console.log("click");
  //     // const action = { type: "DECREMENT" };
  //     // dispatch(action);
  //     dispatch (decrementLikes)

  //   },
  // };
  return {
    onIncrementLikes: () => {
      dispatch(incrementLikes());
    },
    onDecrementLikes: () => {
      dispatch(decrementLikes());
     },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Linkes);
