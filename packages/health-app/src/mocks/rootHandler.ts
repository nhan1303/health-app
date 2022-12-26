import authHandler from "./authHandler";
import columnHandler from "./columnHandler";
import myRecordHandler from "./myRecordHandler";
import topHandler from "./topHandler";

const rootHandler = [
  ...authHandler,
  ...topHandler,
  ...columnHandler,
  ...myRecordHandler,
];

export default rootHandler;
