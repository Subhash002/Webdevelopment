import { useState } from "react";
import "./App.css";
import MediaCard from "./Card";
import JokesAPI from "./JokesAPI";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <JokesAPI />
    </div>
  );
}

export default App;
