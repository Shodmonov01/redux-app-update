
export const SingleComment = (props) => {
  console.log("single comments props >", props);


  return (
    <>
      <div className="card-comments">
        <form className="comments-item-create">
          <div className="comment-item-del">
            &times;
          </div>
          <input type="text" />
          <input type="submit" hidden />
        </form>
      </div>
    </>
  );
};
 