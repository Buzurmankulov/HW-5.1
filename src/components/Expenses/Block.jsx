import "./Block.css";
function Block(props) {
  const classes = props.className + " block";
  return <div className={classes}>{props.children}</div>;
}
export default Block;
