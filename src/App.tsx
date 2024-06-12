import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Models from "./pages/Models.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import Contact from "./pages/Contact.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/models" element={<Models />}></Route>
        <Route path="/testimonials" element={<Testimonials />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
