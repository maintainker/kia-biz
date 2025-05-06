import { getFilterItems, getQnaList } from "@/mockApi/mockData";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

type TabType = "USAGE" | "CONSULT";
type FaqCategoryType =
  | "PRODUCT"
  | "COUNSELING"
  | "CONTRACT"
  | "SIGN_UP"
  | "BUSINESS"
  | "ACCIDENT"
  | "RESERVATION"
  | "VEHICLE"
  | "REFUEL"
  | "COUPON";
interface GetFnqParam {
  tab: TabType;
  question?: string;
  faqCategoryID?: FaqCategoryType;
  offset?: number;
}

interface QnaListResponse {
  pageInfo: {
    totalRecord: number;
    offset: number;
    limit: number;
    prevOffset: number;
    nextOffset: number;
  };
  items: {
    id: number;
    categoryName: string;
    categoryID: string;
    subCategoryName: string;
    question: string;
    answer: string;
  }[];
}
interface CategoryItem {
  categoryID: FaqCategoryType;
  name: string;
}

export const useGetFnqQuery = ({
  tab,
  question,
  faqCategoryID,
  offset,
}: GetFnqParam) => {
  return useQuery<QnaListResponse, Error>({
    queryKey: ["fnq", tab, question, faqCategoryID, offset],
    queryFn: () => getQnaList({ tab, question, faqCategoryID, offset }),
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetFnqInfiniteQuery = ({
  tab,
  question,
  faqCategoryID,
}: Omit<GetFnqParam, "offset">) => {
  return useInfiniteQuery<QnaListResponse, Error>({
    queryKey: ["fnq", tab, question, faqCategoryID],
    queryFn: ({ pageParam = 0 }) =>
      getQnaList({
        tab,
        question,
        faqCategoryID,
        offset: pageParam as number,
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.pageInfo.nextOffset < lastPage.pageInfo.totalRecord
        ? lastPage.pageInfo.nextOffset
        : undefined;
    },
    getPreviousPageParam: (firstPage) => {
      return firstPage.pageInfo.prevOffset >= 0
        ? firstPage.pageInfo.prevOffset
        : undefined;
    },
    staleTime: 5 * 60 * 1000,
    initialPageParam: 0,
  });
};
export const useGetFilterItemsQuery = (tab: TabType) => {
  return useQuery<CategoryItem[], Error>({
    queryKey: ["fnq", tab],
    queryFn: () => getFilterItems(tab),
    staleTime: 5 * 60 * 1000,
  });
};
