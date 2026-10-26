import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">PLAY SOPT MOVIE</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;