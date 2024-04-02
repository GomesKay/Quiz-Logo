import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Easy } from "./pages/Easy";
import { Medium } from "./pages/Medium";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/easy" element={<Easy />} />
      <Route path="/medium" element={<Medium />} />
    </Routes>
  );
}
