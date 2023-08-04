import { Route, Routes } from "react-router-dom";
import Dashboard from "./client/routes/dashboard";
import Transact from "./client/routes/History";
import Folder from "./client/routes/organize";
import Setting from "./client/routes/setting";
import Templates from "./client/routes/templates";
import LandingPage from "./page";
import Forget from "./page/forget";
import Login from "./page/login";
import Signup from "./page/register";
import Editor from "./client/routes/Editor";
import Admin from "./admin/Routes/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/transaction" element={<Transact />} />
      <Route path="/templates" element={<Templates />} />
      <Route exact path="/folder/:name" element={<Folder />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
export default App;
