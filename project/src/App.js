import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services.jsx";
import Events from "./pages/Events";
import AddEvent from "./pages/AddEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Services" element={<Services/>} />
          <Route path="Events" element={<Events/>} />   
          <Route path="Book" element={<AddEvent/>} />                 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;