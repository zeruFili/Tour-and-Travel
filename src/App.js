import Tour_detail from "./from/detail";
import Mains from "./route/zer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import About from "./pages/About.jsx";
import CreateTable from "./pages/Product.jsx";
import Login from "./auth/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Tour_Detail/:id" element={<Tour_detail />} />
        <Route path="/" element={<Mains />} />
      </Routes>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<About />} />

          <Route path="/product" element={<CreateTable />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
