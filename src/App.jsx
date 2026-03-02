import { Route, Routes } from "react-router-dom";
import Parent from "./Parent";
import Memo from "./Memo";
import Timer from "./Timer";
import All from "./All";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Parent />} />
      <Route path="/memo" element={<Memo />} />
      <Route path="/ref" element={<Timer />} />
      <Route path="/all" element={<All />} />
    </Routes>
  );
}

export default App;
