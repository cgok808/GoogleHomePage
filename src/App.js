import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import About from "./pages/About";
import Gmail from "./pages/Gmail";
import Images from "./pages/Images";
import Store from "./pages/Store";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/store' exact element={<Store />} />
        <Route path='/gmail' exact element={<Gmail />} />
        <Route path='/images' exact element={<Images />} />
      </Routes>
    </>
  );
}

export default App;
