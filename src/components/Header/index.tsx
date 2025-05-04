"use client";
import Link from "next/link";
import { header, logo, nav, navLink, active } from "./index.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollY === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <header className={[header, isScrolled ? active : ""].join(" ")}>
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
