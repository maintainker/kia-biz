import { ReactNode, useState } from "react";
import { tabContainer, tab, activeTab } from "./index.css";

export interface TabType<T = string> {
  key: T;
  children: ReactNode;
}

interface Props<T = string> {
  onTabChange: (key: T) => void;
  tabList: TabType<T>[];
  activeKey: T;
  className?: string;
}

const TabButton = <T extends string = string>({
  onTabChange,
  tabList,
  activeKey,
  className,
}: Props<T>) => {
  return (
    <div className={[tabContainer, className ?? ""].join(" ")}>
      {tabList.map(({ key, children }) => {
        return (
          <button
            key={`kia-tab-${key}`}
            className={`${tab} ${activeKey === key ? activeTab : ""}`}
            onClick={() => onTabChange(key)}
          >
            {children}
          </button>
        );
      })}
    </div>
  );
};

export default TabButton;
