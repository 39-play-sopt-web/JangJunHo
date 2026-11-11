import { NavLink, useNavigate } from "react-router";
import { getPart, removeAuthCode, removePart } from "../constants/storage";
import * as styles from "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const part = getPart();

  const handleLogout = () => {
    removeAuthCode();
    removePart();
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span className={styles.logo}>
          PLAY SOPT <span className={styles.logoAccent}>BOARD</span>
        </span>
        {part && <span className={styles.partBadge}>{part} 파트</span>}
      </div>

      <nav className={styles.nav}>
        <NavLink to="/posts" end className={styles.tab}>
          게시글 목록
        </NavLink>
        <NavLink to="/posts/new" className={styles.tab}>
          글쓰기
        </NavLink>
        <button type="button" className={styles.tab} onClick={handleLogout}>
          로그아웃
        </button>
      </nav>
    </header>
  );
};

export default Header;
