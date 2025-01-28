import { BrowserRouter as Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Routes>
        <div className="flex h-screen">
          <Sidebar />
        </div>
      </Routes>
    </>
  );
}

export default App;
