import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `https://portfolio-nine-beta-96.vercel.app/api/getPageInfo`
  );
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
