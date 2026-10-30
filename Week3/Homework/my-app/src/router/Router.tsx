import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import MovieListPage from "../pages/MovieListPage";
import MovieDetailPage from "../pages/MovieDetailPage";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: MovieListPage },
      { path: "/movie/:movieId", Component: MovieDetailPage },
    ],
  },
]);

export default router;