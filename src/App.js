import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Complete from "./Components/Sheet/Complete.js/Complete";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About.js";
import AllTopic from "./Components/Sheet/Complete.js/AllTopic.js";
import AllTopic1 from "./Components/Sheet/Beginner.js/AllTopic.js";
import Records from "./Components/Sheet/Complete.js/DSA.js";
import Records1 from "./Components/Sheet/Beginner.js/DSA.js";
import Beginner from "./Components/Sheet/Beginner.js/Beginner";

function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/About" element={<About />} />

        {/* Beginner Sheet */}
        <Route path="/beginner/Array" element={<AllTopic1 data={Records1[0]} />} />
        <Route path="/beginner/Recursion" element={<AllTopic1 data={Records1[1]} />} />
        <Route path="/beginner/Binary_Search" element={<AllTopic1 data={Records1[2]} />} />
        <Route path="/beginner/Stack" element={<AllTopic1 data={Records1[3]} />} />
        <Route path="/beginner/Linkedlist" element={<AllTopic1 data={Records1[4]} />} />
        <Route path="/beginner/Matrix" element={<AllTopic1 data={Records1[5]} />} />
        <Route path="/beginner/String" element={<AllTopic1 data={Records1[6]} />} />
        


        {/* Complete Sheet */}
        <Route path="/complete/Array" element={<AllTopic data={Records[0]} />} />
        <Route path="/complete/String" element={<AllTopic data={Records[1]} />} />
        <Route path="/complete/Binary_Search" element={<AllTopic data={Records[2]} />} />
        <Route path="/complete/Linkedlist" element={<AllTopic data={Records[3]} />} />
        <Route path="/complete/Tree" element={<AllTopic data={Records[4]} />} />
        <Route path="/complete/Hash_Table" element={<AllTopic data={Records[5]} />} />
        <Route path="/complete/Heap" element={<AllTopic data={Records[6]} />} />
        <Route path="/complete/Design" element={<AllTopic data={Records[7]} />} />
        <Route path="/complete/Sliding_Window" element={<AllTopic data={Records[8]} />} />
        <Route path="/complete/Greedy" element={<AllTopic data={Records[9]} />} />
        <Route path="/complete/Maths" element={<AllTopic data={Records[10]} />} />
        <Route path="/complete/Recursion" element={<AllTopic data={Records[11]} />} />
        <Route path="/complete/Stack" element={<AllTopic data={Records[12]} />} />
        <Route path="/complete/Two_pointer" element={<AllTopic data={Records[13]} />} />
        <Route path="/complete/Bfs" element={<AllTopic data={Records[14]} />} />
        <Route path="/complete/Dfs" element={<AllTopic data={Records[15]} />} />
        <Route path="/complete/Graph" element={<AllTopic data={Records[16]} />} />
        <Route path="/complete/Trie" element={<AllTopic data={Records[17]} />} />
        <Route path="/complete/Dp" element={<AllTopic data={Records[18]} />} />
        <Route path="/complete/Segment_Tree" element={<AllTopic data={Records[19]} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
