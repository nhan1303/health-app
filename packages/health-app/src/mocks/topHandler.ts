import circularProgressBackground from "assets/images/d01.jpg";
import { rest } from "msw";
import { apiURL, sleep } from "utils";
import image1 from "assets/images/m01.jpg";
import image2 from "assets/images/l03.jpg";
import image3 from "assets/images/l01.jpg";
import image4 from "assets/images/l02.jpg";
import image5 from "assets/images/d02.jpg";
import image6 from "assets/images/s01.jpg";
import { faker } from "@faker-js/faker";

const data = [
  {
    id: "1",
    text: "05.21.Morning",
    imgUrl: image1,
  },
  {
    id: "2",
    text: "05.21.Lunch",
    imgUrl: image2,
  },
  {
    id: "3",
    text: "05.21.Dinner",
    imgUrl: circularProgressBackground,
  },
  {
    id: "4",
    text: "05.21.Snack",
    imgUrl: image3,
  },
  {
    id: "5",
    text: "05.20.Morning",
    imgUrl: image1,
  },
  {
    id: "6",
    text: "05.20.Lunch",
    imgUrl: image4,
  },
  {
    id: "7",
    text: "05.20.Dinner",
    imgUrl: image5,
  },
  {
    id: "8",
    text: "05.20.Snack",
    imgUrl: image6,
  },
  {
    id: "9",
    text: "05.21.Morning",
    imgUrl: image1,
  },
  {
    id: "10",
    text: "05.21.Lunch",
    imgUrl: image2,
  },
  {
    id: "11",
    text: "05.21.Dinner",
    imgUrl: circularProgressBackground,
  },
  {
    id: "12",
    text: "05.21.Snack",
    imgUrl: image3,
  },
  {
    id: "13",
    text: "05.20.Morning",
    imgUrl: image1,
  },
  {
    id: "14",
    text: "05.20.Lunch",
    imgUrl: image4,
  },
  {
    id: "15",
    text: "05.20.Dinner",
    imgUrl: image5,
  },
  {
    id: "16",
    text: "05.20.Snack",
    imgUrl: image6,
  },
  {
    id: "17",
    text: "05.21.Morning",
    imgUrl: image1,
  },
  {
    id: "18",
    text: "05.21.Lunch",
    imgUrl: image2,
  },
  {
    id: "19",
    text: "05.21.Dinner",
    imgUrl: circularProgressBackground,
  },
  {
    id: "20",
    text: "05.21.Snack",
    imgUrl: image3,
  },
  {
    id: "21",
    text: "05.20.Morning",
    imgUrl: image1,
  },
  {
    id: "22",
    text: "05.20.Lunch",
    imgUrl: image4,
  },
  {
    id: "23",
    text: "05.20.Dinner",
    imgUrl: image5,
  },
  {
    id: "24",
    text: "05.20.Snack",
    imgUrl: image6,
  },
];

const handlers = [
  rest.get(apiURL("/progress"), async (req, res, ctx) => {
    await sleep();

    return res(
      ctx.status(200),
      ctx.json({
        code: "200",
        message: "success",
        data: {
          value: 75,
          description: "5/21",
        },
      })
    );
  }),

  rest.get(apiURL("/body-fat-percentage"), async (req, res, ctx) => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const data = {
      months,
      primaryData: months.map(() =>
        faker.datatype.number({ min: 0, max: 100 })
      ),
      secondaryData: months.map(() =>
        faker.datatype.number({ min: 50, max: 100 })
      ),
    };

    await sleep();

    return res(
      ctx.status(200),
      ctx.json({
        code: "200",
        message: "success",
        data,
      })
    );
  }),
  rest.get(apiURL("/foods"), async (req, res, ctx) => {
    const page = Number(req.url.searchParams.get("page") || 1);
    const limit = Number(req.url.searchParams.get("limit") || 8);

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + (limit - 1), totalItems);

    const foods = page > totalPages ? [] : data.slice(startIndex, endIndex + 1);
    const nextPage = page + 1 > totalPages ? null : page + 1;

    await sleep();

    return res(
      ctx.status(200),
      ctx.json({
        code: "200",
        message: "success",
        data: {
          data: foods,

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
