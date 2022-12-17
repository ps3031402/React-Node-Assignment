import React from "react";
import "./App.css";
import { useState } from "react";
function App() {
  const [array, setArray] = useState("");
  const [target, setTarget] = useState(null);
  const [result, setResult] = useState();

  const getResult = async (e) => {
    e.preventDefault();
    let res = await fetch('http://localhost:5000/api', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({ array, target} )
    });

    let data = await res.json();
    let result = JSON.stringify(data.data);
    setResult(result)
    console.log(result);
  };
  return (
    <>
      <p className="title">React-Node Challenge</p>

      <form className="App">
        <input
          placeholder="Enter elements of the array separated by comma"
          type="text"
          onChange={(e) => setArray(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your target Number here"
          onChange={(e) => setTarget(e.target.value)}
        />
        <input
          placeholder="You will see result here"
          type="text"
          value={JSON.stringify(result)}
        />
        <input
          type={"submit"}
          style={{ backgroundColor: "#a1eafb" }}
          onClick={getResult}
        />
      </form>
    </>
  );
}

export default App;
