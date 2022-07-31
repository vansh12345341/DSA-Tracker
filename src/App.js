import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Complete from "./Components/Sheet/Complete.js/Complete";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About.js";
import AllTopic from "./Components/Sheet/Complete.js/AllTopic.js";
import Records from "./Components/Sheet/Complete.js/DSA.js";

function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/About" element={<About />} />
        <Route path="/complete/AllTopic" element={<Complete />} />
        <Route path="/complete/AllTopic/Array" element={<AllTopic data={Records[0]} />} />
        <Route path="/complete/AllTopic/String" element={<AllTopic data={Records[1]} />} />
        <Route path="/complete/AllTopic/Binary_Search" element={<AllTopic data={Records[2]} />} />
        <Route path="/complete/AllTopic/Linkedlist" element={<AllTopic data={Records[3]} />} />
        <Route path="/complete/AllTopic/Tree" element={<AllTopic data={Records[4]} />} />
        <Route path="/complete/AllTopic/Hash_Table" element={<AllTopic data={Records[5]} />} />
        <Route path="/complete/AllTopic/Heap" element={<AllTopic data={Records[6]} />} />
        <Route path="/complete/AllTopic/Design" element={<AllTopic data={Records[7]} />} />
        <Route path="/complete/AllTopic/Sliding_Window" element={<AllTopic data={Records[8]} />} />
        <Route path="/complete/AllTopic/Greedy" element={<AllTopic data={Records[9]} />} />
        <Route path="/complete/AllTopic/Maths" element={<AllTopic data={Records[10]} />} />
        <Route path="/complete/AllTopic/Recursion" element={<AllTopic data={Records[11]} />} />
        <Route path="/complete/AllTopic/Stack" element={<AllTopic data={Records[12]} />} />
        <Route path="/complete/AllTopic/Two_pointer" element={<AllTopic data={Records[13]} />} />
        <Route path="/complete/AllTopic/Bfs" element={<AllTopic data={Records[14]} />} />
        <Route path="/complete/AllTopic/Dfs" element={<AllTopic data={Records[15]} />} />
        <Route path="/complete/AllTopic/Graph" element={<AllTopic data={Records[16]} />} />
        <Route path="/complete/AllTopic/Trie" element={<AllTopic data={Records[17]} />} />
        <Route path="/complete/AllTopic/Dp" element={<AllTopic data={Records[18]} />} />
        <Route path="/complete/AllTopic/Segment_Tree" element={<AllTopic data={Records[19]} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
