import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import ArticleOne from "../pages/blog/My take on svelte";
import ArticleTwo from "../pages/blog/What I cannot create I dont understand";
import Header from "../components/header/Header";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-take-on-svelte" element={<ArticleOne />} />
        <Route path="/what-i-cannot-create" element={<ArticleTwo />} />
      </Routes>
    </BrowserRouter>
  );
}
