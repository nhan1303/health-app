import authHandler from "./authHandler";
import topHandler from "./topHandler";

const rootHandler = [...authHandler, ...topHandler];

export default rootHandler;
