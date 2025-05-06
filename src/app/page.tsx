import { FilterType, TabType } from "@/components";
import HomeTemplate from "@/templates/HomeTemplate";

type TabKey = "CONSULT" | "USAGE";
type FilterKey = "product" | "counseling" | "contract";

const tabs: TabType<TabKey>[] = [
  {
    key: "CONSULT",
    children: "서비스 도입",
  },
  {
    key: "USAGE",
    children: "서비스 이용",
  },
];

const filters: FilterType<FilterKey>[] = [
  {
    children: "서비스 상품",
    key: "product",
  },
  {
    children: "도입 상담",
    key: "counseling",
  },
  {
    children: "계약",
    key: "contract",
  },
];
export default function Home() {
  return <HomeTemplate tabs={tabs} filters={filters} />;
}

export const metadata = {
  title: "서비스 도입 FAQ | 기아 비즈(Kia Biz) - 친환경 모빌리티 서비스",
  description:
    "기아 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.",
  icons: {
    icon: "/favicon.ico",
  },
};
