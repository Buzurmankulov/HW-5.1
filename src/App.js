import "./App.css";
import Block from "./components/Expenses/Block";

const blocks = [
  {
    id: "b2",
    block: "green",
  },
  {
    id: "b3",
    block: "color",
  },
  {
    id: "b4",
    block: `${Math.random()}`,
  },
  {
    id: "b5",
    block: "green",
  },
  {
    id: "b6",
    block: `${Math.random()}`,
  },
  {
    id: "b1",
    block: "yellow",
  },
];

function App() {
  return (
    <div className="App">
      {blocks.map((item) =>
        item.block === "yellow" ? (
          <Block className="yellow" key={item.id} />
        ) : item.block === "green" ? (
          <Block className="green" key={item.id} />
        ) : item.block === "color" ? (
          <Block className="lime" key={item.id} />
        ) : (
          <Block className="red" key={item.id} />
        )
      )}
    </div>
  );
}
export default App;
