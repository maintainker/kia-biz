"use client";

import { Header, Tab, TabButton } from "@/components";
import {
  contents,
  titleContainer,
  title,
  description,
  searchContainer,
  tabContainer,
} from "./index.css";
import { ChangeEvent, useState } from "react";
import InputForm from "@/components/InputForm";

type TabKey = "consult" | "useage";

const tabs: Tab.TabType<TabKey>[] = [
  {
    key: "consult",
    children: "서비스 도입",
  },
  {
    key: "useage",
    children: "서비스 이용",
  },
];

export default function Home() {
  const [activeTabKey, setActiveTabKey] = useState<TabKey>("consult");
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleClickTab = (key: TabKey) => {
    setActiveTabKey(key);
  };
  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  return (
    <div
      style={{
        height: "200vh",
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
        <div className={searchContainer}>
          <InputForm
            type="text"
            placeholder="찾으시는 내용을 입력해 주세요."
            value={searchKeyword}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("test");
            }}
            onChange={handleChangeKeyword}
            onClear={() => setSearchKeyword("")}
          />
        </div>
      </main>
    </div>
  );
}
