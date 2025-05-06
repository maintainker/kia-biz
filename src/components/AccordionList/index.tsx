import {
  accordionContainer,
  answerContainer,
  arrowIcon,
  category,
  listView,
  listViewSpan,
  loadingView,
  moreButton,
  noData,
  plusIcon,
  question,
} from "./index.css";

export interface AccordionItem<T = string> {
  category: string;
  question: string;
  body: string;
  key: T;
}
interface Props<T = string> {
  isLoading?: boolean;
  items: AccordionItem<T>[];
  activeKey?: T;
  onClick?: (key: T) => void;
  hasNextpage?: boolean;
  onNextClick?: () => void;
}

const AccordionList = <T extends string | number = string>({
  items,
  activeKey,
  onClick,
  isLoading,
  hasNextpage,
  onNextClick,
}: Props<T>) => {
  console.log(items.length);
  if (isLoading === true) {
    return <div className={[loadingView, accordionContainer].join(" ")}></div>;
  }
  if (items.length === 0) {
    return (
      <div className={[noData, accordionContainer].join(" ")}>
        <span>검색결과가 없습니다.</span>
      </div>
    );
  }
  return (
    <>
      <ol className={accordionContainer}>
        {items.length > 0 &&
          items.map((el) => {
            return (
              <li
                key={`kia-qna-accordion-${el.key}`}
                className={el.key === activeKey ? "active" : ""}
              >
                <button className={listView} onClick={() => onClick?.(el.key)}>
                  <span className={[category, listViewSpan].join(" ")}>
                    {el.category}
                  </span>
                  <span className={[question, listViewSpan].join(" ")}>
                    {el.question}
                  </span>
                  <span className={[arrowIcon, listViewSpan].join(" ")}>
                    열기
                  </span>
                </button>
                <div
                  className={answerContainer}
                  dangerouslySetInnerHTML={{ __html: el.body }}
                />
              </li>
            );
          })}
      </ol>
      {hasNextpage && (
        <button onClick={onNextClick} className={moreButton}>
          <i className={plusIcon} />
          <span>더보기</span>
        </button>
      )}
    </>
  );
};

export default AccordionList;
