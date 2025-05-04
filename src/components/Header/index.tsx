import Link from "next/link";
import { header, logo, nav, navLink } from "./index.css";

const Header = () => {
  return (
    <header className={header}>
      <Link href={"/"} className={logo} />
      <nav className={nav}>
        <a href="#" className={navLink}>
          서비스 소개
        </a>
        <a href="#" className={navLink}>
          자주 묻는 질문
        </a>
        <a href="#" className={navLink}>
          서식
        </a>
        <a href="#" className={navLink}>
          창업문의
        </a>
      </nav>
    </header>
  );
};

export default Header;
