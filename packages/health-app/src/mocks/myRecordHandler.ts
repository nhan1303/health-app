import { IMyRecommend } from "modules/domains/my-record/types";
import { rest } from "msw";
import { apiURL, sleep } from "utils";

import image1 from "assets/images/MyRecommend-1.jpg";
import image2 from "assets/images/MyRecommend-2.jpg";
import image3 from "assets/images/MyRecommend-3.jpg";

const data = [
  {
    id: "1",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "2",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "3",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "4",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "5",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "6",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "7",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "8",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "9",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "10",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "11",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "12",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "13",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "14",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "15",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "16",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "17",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "18",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "19",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "20",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "21",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "22",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "23",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: "24",
    date: "2021.05.21",
    time: "23:25",
    description:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
];

const myRecommendData: IMyRecommend[] = [
  {
    id: "1",
    title: "BODY RECORD",
    subTitle: "自分のカラダの記録",
    imgUrl: image1,
  },
  {
    id: "2",
    title: "MY EXERCISE",
    subTitle: "自分の運動の記録",
    imgUrl: image2,
  },
  {
    id: "3",
    title: "MY DIARY",
    subTitle: "自分の日記",
    imgUrl: image3,
  },
];

const handlers = [
  rest.get(apiURL("/my-recommend"), async (req, res, ctx) => {
    await sleep();

    return res(
      ctx.status(200),
      ctx.json({
        code: "200",
        message: "success",
        data: myRecommendData,
      })
    );
  }),

  rest.get(apiURL("/my-diary"), async (req, res, ctx) => {
    const page = Number(req.url.searchParams.get("page") || 1);
    const limit = Number(req.url.searchParams.get("limit") || 8);

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + (limit - 1), totalItems);

    const myDiary =
      page > totalPages ? [] : data.slice(startIndex, endIndex + 1);
    const nextPage = page + 1 > totalPages ? null : page + 1;

    await sleep();

    return res(
      ctx.status(200),
      ctx.json({
        code: "200",
        message: "success",
        data: {
          data: myDiary,

          pageInfo: {
            currentPage: page,
            nextPage,
            limit,
            totalPages,
          },
        },
      })
    );
  }),
];

export default handlers;
