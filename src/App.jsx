import { Route, Routes } from "react-router-dom";
import Parent from "./Parent";
import Memo from "./Memo";
import Timer from "./Timer";
import All from "./All";
import UseRef from "./UseRef";
import UseMemo from "./UseMemo";
import UseCallBack from "./usecallback/UseCallBack";
import Container from "./UseContext/Components/Container";
import UseReducer from "./useReducer/UseReducer";
import UseLayoutEffect from "./useLayoutEffect/UseLayoutEffect";
import Main from "./CustomHooks/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Parent />} />
      <Route path="/memo" element={<Memo />} />
      <Route path="/ref" element={<Timer />} />
      <Route path="/all" element={<All />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useCallBack" element={<UseCallBack />} />
      <Route path="/useContext" element={<Container />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/uselayouteffect" element={<UseLayoutEffect />} />
      <Route path="/usecustohooks" element={<Main />} />
    </Routes>
  );
}

export default App;
