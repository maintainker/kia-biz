import { filterButton, filterContainer } from "./index.css";

export interface FilterType<T = string> {
  children: string;
  key: T;
}

interface Props<T = string> {
  filterList: FilterType<T>[];
  activeKey: T | "all";
  onClick?: (key: T | "all") => void;
  filterName: string;
}

const FilterList = <T extends string>({
  filterList,
  filterName,
  onClick,
  activeKey,
}: Props<T>) => {
  return (
    <div className={filterContainer}>
      <button
        onClick={() => onClick?.("all")}
        className={[filterButton, activeKey === "all" ? "active" : ""].join(
          " "
        )}
      >
        전체
      </button>
      {filterList.map(({ children, key }) => {
        return (
          <button
            onClick={() => onClick?.(key)}
            key={`filter-${filterName}-${key}`}
            className={[filterButton, activeKey === key ? "active" : ""].join(
              " "
            )}
          >
            {children}
          </button>
        );
      })}
    </div>
  );
};

export default FilterList;
