import { useState } from "react";
import "./App.css";
import NestMap from "./newQuestion/NestMap";
import Ques from "./newQuestion/Ques";
import Ques2 from "./newQuestion/Ques2";
import Exercice11 from "./questions/Exercice11";
import Exercice8 from "./questions/Exercice8";
import Exercise1 from "./questions/exercise1";
import Exercise10 from "./questions/Exercise10";
import Exercise2 from "./questions/Exercise2";
import Exercise3 from "./questions/Exercise3";
import Exercise4 from "./questions/Exercise4";
import Exercise5 from "./questions/Exercise5";
import Exercise6 from "./questions/Exercise6";
import Exercise7 from "./questions/Exercise7";
import Exercise9 from "./questions/Exercise9";
import ChildToParent from "./newQuestion/ChildToParent";
import Ques3 from "./newQuestion/Ques3";
import Ques4 from "./newQuestion/Ques4";

function App() {
  // this is for childToParent
  const [parentState, setParentState] = useState("");

  const onHandleChange = (value) => {
    setParentState(value);
  };

  return (
    <>
      <h1>Interview Purpose</h1>
      {/* <Exercise1 /> */}
      {/* <Exercise2 /> */}
      {/* <Exercise3 /> */}
      {/* <Exercise4 /> */}
      {/* <Exercise5 /> */}
      {/* <Exercise6 /> */}
      {/* <Exercise7 /> */}
      {/* <Exercice8 /> */}
      {/* <Exercise9 /> */}
      {/* <Exercise10 /> */}
      {/* <Exercice11 /> */}
      {/* <Ques /> */}
      {/* <Ques2 /> */}
      {/* <NestMap /> */}
      {/* <h1>{parentState}</h1>
      <ChildToParent onHandleChange={onHandleChange} /> */}
      {/* <Ques3 /> */}
      <Ques4 />
    </>
  );
}

export default App;
