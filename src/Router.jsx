import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Easy } from "./pages/Easy"
import { Medium } from "./pages/Medium"
import { Difficult } from "./pages/Difficult"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/easy" element={<Easy />} />
      <Route path="/medium" element={<Medium />} />
      <Route path="/difficult" element={<Difficult />} />
    </Routes>
  )
}
