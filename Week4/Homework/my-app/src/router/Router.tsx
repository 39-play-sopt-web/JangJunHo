import { createBrowserRouter } from "react-router";
import CodePage from "../pages/CodePage";
import Layout from "../components/Layout";
import PostListPage from "../pages/PostListPage";
import PostWritePage from "../pages/PostWritePage";
import PostDetailPage from "../pages/PostDetailPage";
import PostEditPage from "../pages/PostEditPage";

const router = createBrowserRouter([
  { path: "/", Component: CodePage }, // 헤더 없음
  {
    Component: Layout, // 헤더 있음
    children: [
      { path: "/posts", Component: PostListPage },
      { path: "/posts/new", Component: PostWritePage },
      { path: "/posts/:postId", Component: PostDetailPage },
      { path: "/posts/:postId/edit", Component: PostEditPage },
    ],
  },
]);

export default router;