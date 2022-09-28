import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import ArticleOne from "../pages/blog/My take on svelte";
import ArticleTwo from "../pages/blog/Protopie good practices";
import Writing from "../pages/writing/writing";
import Header from "../components/header/Header";
import Bubble from "../components/Bubble";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes element={<Bubble />}>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>

      <Routes element={<Header />}>
        <Route path="/writing/my-take-on-svelte" element={<ArticleOne />} />
        <Route path="/writing/what-i-cannot-create" element={<ArticleTwo />} />
      </Routes>
    </BrowserRouter>
  );
}
