import "./App.css";
import { customMap } from "./utils/customMap";

function App() {
  

  let arr = [1, 2, 3];
  const newArr = customMap(arr, (el) => el * 2);
  console.log(newArr);

  return (
    <>
      
    </>
  );
}

export default App;
