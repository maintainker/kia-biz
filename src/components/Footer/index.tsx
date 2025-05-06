import Link from "next/link";
import {
  copyRight,
  footerContainer,
  informationContainer,
  informationContent,
  informationItem,
  informationList,
  utilButton,
  utilList,
} from "./index.css";

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <div className={informationContainer}>
        <div className={utilList}>
          <button className={utilButton}>개인정보 처리방침</button>
          <button className={utilButton}>이용약관</button>
        </div>
        <address className={informationList}>
          <span className={informationItem}>
            서울특별시 서초구 헌릉로 12
            <em className={[informationContent, "company"].join(" ")}>
              기아㈜
            </em>
          </span>
          <span className={informationItem}>
            대표:<i className={informationContent}>송호성, 최준영</i>
          </span>
          <span className={informationItem}>
            사업자등록번호:<i className={informationContent}>119-81-02316</i>
          </span>
          <span className={informationItem}>
            통신판매번호:<i className={informationContent}>2006-07935</i>
          </span>
          <span className={informationItem}>
            고객센터:<i className={informationContent}>1833-4964</i>
          </span>
          <span className={informationItem}>
            제휴문의:
            <Link className={informationContent} href="mailto:kiabiz@kia.com">
              kiabiz@kia.com
            </Link>
          </span>
        </address>
      </div>
      <p className={copyRight}>© 2023 KIA CORP. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
