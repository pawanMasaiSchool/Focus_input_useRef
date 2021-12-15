import { useRef } from "react";
import "./styles.css";

export default function App() {
  const inpRef = useRef(null);

  const FocusOnIt = () => {
    inpRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input ref={inpRef} placeholder="useRef" />
      <br />
      <br />
      <button onClick={FocusOnIt}>FOCUS ON INPUT</button>
    </div>
  );
}
