import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import ArticleOne from "../pages/blog/article1";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-take-on-svelte" element={<ArticleOne />} />
      </Routes>
    </BrowserRouter>
  );
}

{
  /* <Route path="/protopie-page-scroll-position" element={<ArticleTwo/>}/> */
}
