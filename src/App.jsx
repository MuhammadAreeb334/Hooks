import { Route, Routes } from "react-router-dom";
import Parent from "./Parent";
import Memo from "./Memo";
import Timer from "./Timer";
import All from "./All";
import UseRef from "./UseRef";
import UseMemo from "./UseMemo";
import UseCallBack from "./usecallback/UseCallBack";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Parent />} />
      <Route path="/memo" element={<Memo />} />
      <Route path="/ref" element={<Timer />} />
      <Route path="/all" element={<All />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useCallBack" element={<UseCallBack   />} />
    </Routes>
  );
}

export default App;
