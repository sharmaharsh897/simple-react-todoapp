import "./styles.css";
import { useState } from "react";
export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  function showtext() {
    console.log(text);
    setList([...list, text]);
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={showtext}>Show the text below</button>
      <ul>
        {list.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </div>
  );
}
