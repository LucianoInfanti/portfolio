import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import ArticleOne from "../pages/blog/article1";
import ArticleTwo from "../pages/blog/article2";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-take-on-svelte" element={<ArticleOne />} />
        <Route path="/not-every-ideia" element={<ArticleTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

{
  /* <Route path="/protopie-page-scroll-position" element={<ArticleTwo/>}/> */
}
