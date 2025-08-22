import { Route, Routes } from "react-router-dom";
import Jump from "./components/Jump";
import Projects from "./components/Projects";


function App() {
  return (
    <>
      <div className="w-screen">
        <Routes>
          <Route path="/" element={<Jump />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        {/* <Toaster/> */}
      </div>
    </>
  );
}

export default App;
