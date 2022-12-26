import { setupWorker } from "msw";
import rootHandler from "./rootHandler";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...rootHandler);
