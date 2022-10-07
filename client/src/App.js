import { BrowserRouter, Routes, Route } from "react-router-dom//";
import { Home, NotFound, SignUp } from "./pages";
import NavTemplate from "./template/NavTemplate";
function App() {
  return (
    <BrowserRouter>
      <NavTemplate />
      <Routes>
        <Route path="/" element={<div>Main</div>} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
