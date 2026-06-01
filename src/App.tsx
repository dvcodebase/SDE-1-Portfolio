import { Route, Routes } from "react-router-dom";
import Jump from "./components/Jump";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Jump />} />
      </Routes>
    </>
  );
}

export default App;
