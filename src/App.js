import { useEffect, useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [inpValue, setInpValue] = useState(0);
  const [dark, setDark] = useState(false);
  const result = useMemo(() => {
    return slowFunction(inpValue);
  }, [inpValue]);

  // useMemo can be used in the referential equality.
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "#000000" : "#ffffff",
      color: dark ? "white" : "black"
    };
  }, [dark]);
  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle]);

  function slowFunction(num) {
    if (num === 0 || num === 1) {
      return num;
    }
    return slowFunction(num - 1) + slowFunction(num - 2);
  }
  return (
    <div className="App">
      <h1>Use Memo Hook</h1>
      <br />
      <input
        placeholder="Enter Here"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />
      <br />
      <br />
      <p style={themeStyle}>{result}</p>
      <br />
      <br />
      <button onClick={() => setDark(!dark)}>Change Theme</button>
    </div>
  );
}
