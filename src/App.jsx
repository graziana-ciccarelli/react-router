import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import PostList from "./pages/PostList";
import Navbar from "./components/NavBar";
import PostDetail from "./pages/PostDetail";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chi-siamo" element={<ChiSiamo />} />
      <Route path="/post-list" element={<PostList />} />
      <Route path="/post/:postId" element={<PostDetail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;