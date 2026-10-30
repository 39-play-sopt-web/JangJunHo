import { Outlet } from "react-router";
import Header from "./Header";

// 모든 페이지 공통 레이아웃 (라우터로 Pages 불러오는거에 레이아웃 주는 코드)
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;