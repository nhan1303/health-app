import authHandler from "./authHandler";
import columnHandler from "./columnHandler";
import topHandler from "./topHandler";

const rootHandler = [...authHandler, ...topHandler, ...columnHandler];

export default rootHandler;
