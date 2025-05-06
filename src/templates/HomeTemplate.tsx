"use client";
import {
  AccordionList,
  FilterType,
  FilterList,
  Header,
  ProcessInfo,
  TabType,
  TabButton,
  AppLink,
  Footer,
} from "@/components";
import {
  contents,
  titleContainer,
  title,
  description,
  searchContainer,
  tabContainer,
  sectionContainer,
  sectionTitle,
  infoButton,
  infoContainer,
  buttonIcon,
  buttonContent,
  kakaoId,
} from "./index.css";
import { ChangeEvent, useEffect, useState } from "react";
import InputForm from "@/components/InputForm";
import Link from "next/link";
import { useGetFilterItemsQuery, useGetFnqQuery } from "@/apis";
import { FaqCategoryType } from "@/mockApi/mockData";

type TabKey = "CONSULT" | "USAGE";

const tabKeymap = {
  CONSULT: "서비스 도입",
  USAGE: "서비스 이용",
};

interface Props {
  tabs: TabType<TabKey>[];
}

const HomeTemplate = ({ tabs }: Props) => {
  const [activeTabKey, setActiveTabKey] = useState<TabKey>("CONSULT");
  const [searchKeyword, setSearchKeyword] = useState<string | undefined>();
  const [filterActiveKey, setFilterActiveKey] = useState<
    FaqCategoryType | "all"
  >("all");
  const [activeAccordionKey, setActiveAccordionKey] = useState<
    undefined | number
  >();

  const { data: faqData } = useGetFnqQuery({
    tab: activeTabKey,
    question: searchKeyword,
    faqCategoryID: filterActiveKey === "all" ? undefined : filterActiveKey,
  });
  const { data: filterData } = useGetFilterItemsQuery(activeTabKey);

  useEffect(() => {
    document.title = `${tabKeymap[activeTabKey]} FAQ | 기아 비즈(Kia Biz) - 친환경 모빌리티 서비스`;
  }, [activeTabKey]);

  const handleClickTab = (key: TabKey) => {
    setActiveTabKey(key);
  };
  const handleClickFilter = (key: FaqCategoryType | "all") => {
    setFilterActiveKey(key);
  };
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Header />
      <main className={contents}>
        <div className={titleContainer}>
          <h1 className={title}>자주 묻는 질문</h1>
          <span className={description}>
            궁금하신 내용을 빠르게 찾아보세요.
          </span>
        </div>
        <div className={tabContainer}>
          <TabButton<TabKey>
            tabList={tabs}
            activeKey={activeTabKey}
            onTabChange={handleClickTab}
          />
        </div>
        <div className={[sectionContainer, searchContainer].join(" ")}>
          <InputForm
            type="text"
            placeholder="찾으시는 내용을 입력해 주세요."
            onSearchSubmit={(e, value) => {
              e.preventDefault();
              setSearchKeyword(value === "" ? undefined : value);
            }}
          />
        </div>
        <div className={sectionContainer}>
          <FilterList<FaqCategoryType>
            activeKey={filterActiveKey}
            filterList={(filterData || []).map((el) => ({
              children: el.name,
              key: el.categoryID,
            }))}
            filterName="filter"
            onClick={handleClickFilter}
          />
        </div>
        <AccordionList<number>
          onClick={(key) => setActiveAccordionKey(key)}
          activeKey={activeAccordionKey}
          items={(faqData?.items || []).map((el) => {
            return {
              key: el.id,
              question: el.question,
              category: el.subCategoryName,
              body: el.answer,
            };
          })}
        />
        <div>
          <h2 className={sectionTitle}>서비스 문의</h2>
          <div className={infoContainer}>
            <Link
              className={infoButton}
              href="https://wiblebiz.kia.com/static/media/proposal.e465bf89a6a3066e69af.pdf"
              download="기아 비즈 서비스 제안서"
            >
              <i className={[buttonIcon, "download"].join(" ")} />
              서비스 제안서 다운로드
            </Link>
            <Link
              className={infoButton}
              href="https://wiblebiz.kia.com/Counsel"
            >
              <i className={[buttonIcon, "regist"].join(" ")} />
              상담문의 등록하기
            </Link>
            <Link
              className={infoButton}
              href="https://pf.kakao.com/_xfLxjdb"
              target="_blank"
              rel="noreferrer"
            >
              <i className={[buttonIcon, "ask"].join(" ")} />
              <p className={buttonContent}>
                <span>카톡으로 문의하기</span>
                <span className={kakaoId}>ID : 기아 비즈</span>
              </p>
            </Link>
          </div>
        </div>

        <div>
          <h2 className={sectionTitle}>이용 프로세스 안내</h2>
          <ProcessInfo />
        </div>
        <AppLink />
      </main>
      <Footer />
    </div>
  );
};
export default HomeTemplate;
