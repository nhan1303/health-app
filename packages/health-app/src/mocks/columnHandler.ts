import { rest } from "msw";
import { apiURL, sleep } from "utils";

import image1 from "assets/images/column-1.jpg";
import image2 from "assets/images/column-2.jpg";
import image3 from "assets/images/column-3.jpg";
import image4 from "assets/images/column-4.jpg";
import image5 from "assets/images/column-5.jpg";
import image6 from "assets/images/column-6.jpg";
import image7 from "assets/images/column-7.jpg";
import image8 from "assets/images/column-8.jpg";

const data = [
  {
    id: "1",
    imgUrl: image1,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "2",
    imgUrl: image2,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "3",
    imgUrl: image3,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "4",
    imgUrl: image4,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "5",
    imgUrl: image5,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "6",
    imgUrl: image6,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "7",
    imgUrl: image7,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "8",
    imgUrl: image8,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "9",
    imgUrl: image1,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "10",
    imgUrl: image2,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "11",
    imgUrl: image3,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "12",
    imgUrl: image4,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "13",
    imgUrl: image5,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "14",
    imgUrl: image6,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "15",
    imgUrl: image7,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "16",
    imgUrl: image8,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "17",
    imgUrl: image1,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "18",
    imgUrl: image2,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "19",
    imgUrl: image3,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "20",
    imgUrl: image4,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "21",
    imgUrl: image5,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "22",
    imgUrl: image6,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "23",
    imgUrl: image7,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "24",
    imgUrl: image8,
    date: "2021.05.17",
    time: "23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: ["魚料理", "和食", "DHA"],
  },
];

const handlers = [
  rest.get(apiURL("/columns"), async (req, res, ctx) => {
    const page = Number(req.url.searchParams.get("page") || 1);
    const limit = Number(req.url.searchParams.get("limit") || 8);

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + (limit - 1), totalItems);

    const columns =
      page > totalPages ? [] : data.slice(startIndex, endIndex + 1);
    const nextPage = page + 1 > totalPages ? null : page + 1;

    await sleep();

    return res(
      ctx.status(200),
      ctx.json({
        code: "200",
        message: "success",
        data: {
          data: columns,

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
