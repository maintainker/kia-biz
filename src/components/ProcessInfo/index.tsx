import {
  processIcon,
  processInfoContainer,
  processInfoDescription,
  processInfoTitle,
  processItem,
  processList,
} from "./index.css";

const ProcessInfo = () => {
  return (
    <ol className={processList}>
      <li className={processItem}>
        <i className={[processIcon, "step1"].join(" ")} />
        <div className={processInfoContainer}>
          <h2 className={processInfoTitle}>1. 문의 등록</h2>
          <span className={processInfoDescription}>
            상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.
          </span>
        </div>
      </li>
      <li className={processItem}>
        <i className={[processIcon, "step2"].join(" ")} />
        <div className={processInfoContainer}>
          <h2 className={processInfoTitle}>2. 관리자 설정</h2>
          <span className={processInfoDescription}>
            관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.
          </span>
        </div>
      </li>
      <li className={processItem}>
        <i className={[processIcon, "step3"].join(" ")} />
        <div className={processInfoContainer}>
          <h2 className={processInfoTitle}>3. 임직원 가입</h2>
          <span className={processInfoDescription}>
            이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.
          </span>
        </div>
      </li>
      <li className={processItem}>
        <i className={[processIcon, "step4"].join(" ")} />
        <div className={processInfoContainer}>
          <h2 className={processInfoTitle}>4. 서비스 이용</h2>
          <span className={processInfoDescription}>
            이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!
          </span>
        </div>
      </li>
    </ol>
  );
};

export default ProcessInfo;
