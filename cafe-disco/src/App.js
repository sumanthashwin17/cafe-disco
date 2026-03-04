import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import CoffeeDetails from "./components/CoffeeDetails";
import CoffeeList from "./components/CoffeeList";
import EditCoffee from "./components/EditCoffee";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee/:id" element={<CoffeeDetails />} />

        {/* Admin */}
        <Route path="/admin/coffees" element={<CoffeeList />} />
        <Route path="/admin/add" element={<EditCoffee />} />
        <Route path="/admin/edit/:id" element={<EditCoffee />} />
      </Routes>
    </Router>
  );
}
