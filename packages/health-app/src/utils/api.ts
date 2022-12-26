export const sleep = (ms: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const apiURL = (path: string) => {
  return process.env.REACT_APP_API_ENDPOINT + path;
};
