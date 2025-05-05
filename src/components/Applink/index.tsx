import {
  AppLinkButton,
  AppLinkContainer,
  AppLinkIcon,
  AppLinkTitle,
  ButtonContainer,
} from "./index.css";

const AppLink = () => {
  return (
    <div className={AppLinkContainer}>
      <h2 className={AppLinkTitle}>기아 비즈 App 지금 만나보세요!</h2>
      <div className={ButtonContainer}>
        <a
          href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
          className={AppLinkButton}
        >
          <i className={[AppLinkIcon, "google"].join(" ")} />
          <span>Google Play</span>
        </a>
        <a
          href="https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794"
          className={AppLinkButton}
        >
          <i className={[AppLinkIcon, "apple"].join(" ")} />
          <span>App Store</span>
        </a>
      </div>
    </div>
  );
};
export default AppLink;
