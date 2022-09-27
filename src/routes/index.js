import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import ArticleOne from "../pages/blog/My take on svelte";
import ArticleTwo from "../pages/blog/Article2/Article2";
import Writing from "../pages/writing/writing";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/my-take-on-svelte" element={<ArticleOne />} />
        <Route path="/writing/what-i-cannot-create" element={<ArticleTwo />} />
      </Routes>
    </BrowserRouter>
  );
}