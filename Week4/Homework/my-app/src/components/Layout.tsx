import { Outlet } from "react-router";
import Header from "./Header";

// 공통 레이아웃
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
