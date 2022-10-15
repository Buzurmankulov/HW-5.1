import "./DataProvider.css";
function CommentDate({ data }) {
  console.log(data);
  function formatDate(date) {
    return date.toLocaleDateString();
  }
  return <div className="Comment-date">{formatDate(data)}</div>;
}
export default CommentDate;
