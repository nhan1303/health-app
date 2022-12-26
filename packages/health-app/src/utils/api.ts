export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const apiURL = (path: string) => {
  return process.env.REACT_APP_API_ENDPOINT + path;
};
