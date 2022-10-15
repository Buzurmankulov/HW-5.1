import CommentUserInfo from "../coment-user-info/CommentUserInfo";
import CommentDate from "../comment-date/DataProvider";
import CommentWrapper from "../comment-wrapper/CommentWrapper";
import "./Commit.css";

const Commit = ({ data }) => {
  console.log(data);
  return (
    <div className="App">
      {data.map((item) => (
        <div>
          <CommentWrapper>
            <div className="Comment">
              <CommentUserInfo data={item.author} />
            </div>
          </CommentWrapper>
          <div className="color">
            <div className="Comment-text">{item.text}</div>
            <CommentDate data={item.date} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Commit;
