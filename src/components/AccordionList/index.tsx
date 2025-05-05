import {
  accordionContainer,
  answerContainer,
  arrowIcon,
  category,
  listView,
  listViewSpan,
  question,
} from "./index.css";

export interface AccordionItem<T = string> {
  category: string;
  question: string;
  body: string;
  key: T;
}
interface Props<T = string> {
  items: AccordionItem<T>[];
  activeKey?: T;
  onClick?: (key: T) => void;
}

const AccordionList = <T extends string | number = string>({
  items,
  activeKey,
  onClick,
}: Props<T>) => {
  return (
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
  );
};

export default AccordionList;
