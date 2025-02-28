import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa Route in modo corretto
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import PostList from "./pages/PostList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/post-list" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
