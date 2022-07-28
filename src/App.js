import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Complete from "./Components/Sheet/Complete.js/Complete";
import Footer from "./Components/Footer/Footer";
import Beginner from "./Components/Sheet/Beginner.js/Beginner";

import Array1 from "./Components/Sheet/Beginner.js/Array";
import Array2 from "./Components/Sheet/Complete.js/Array";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/beginner" element={<Beginner />} />
       

        <Route path="/beginner/Array" element={<Array1 />} />
        <Route path="/complete/Array" element={<Array2 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
