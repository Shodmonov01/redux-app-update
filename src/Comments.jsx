import { useState } from "react";
import { SingleComment } from "./SingleComment";

export const Comments = (props) => {
  const [textComment, setTextComment] = useState('')

  console.log("comments props >", props);


  const handleInput = (e) => {
    console.log('input >>>>' , e.target.value);
    setTextComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit textComment >' , textComment);
  }
  return (
    <>
      <div className="card-comments">
      <form className="comments-item-create" onSubmit={handleSubmit} >
        <input type="text" value={textComment} onChange={handleInput} />
          <input type="submit" hidden />
          <SingleComment/>
        </form>
      </div>
    </>
  );
};
