import { BrowserRouter, Routes, Route } from "react-router-dom//";
import { CheckUser, Home, NotFound, SignUp } from "./pages";
import {
  CreateJob,
  GetJobs,
  Layout,
  Profile,
  Stats,
  Protected,
} from "./pages/dashboard";
import NavTemplate from "./template/NavTemplate";
function App() {
  return (
    <BrowserRouter>
      <NavTemplate />
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Layout />
            </Protected>
          }
        >
          <Route index element={<Stats />} />
          <Route path="/create" element={<CreateJob />} />
          <Route path="/jobs" element={<GetJobs />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/" element={<CheckUser />}>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
