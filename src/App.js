import "./App.css";

import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

import Home from "./components/Pages/Home"
import About from "./components/Pages/About"
import Contact from "./components/Pages/Contact"
import Blog  from "./components/Pages/Blog";
import NavBar from "./components/Navbar";
// import Todo from "./components/Todo";
// import Shopping from "./components/Shopping";

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      {/* <Todo></Todo>
      <Shopping></Shopping> */}
  </>
  );
}

export default App;