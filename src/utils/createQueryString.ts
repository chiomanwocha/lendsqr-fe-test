export const createQueryString = (params: any) => {
  return Object.keys(params)
    .filter((key) => params[key])
    .map((key) => `${key}=${params[key]}`)
    .join("&");
};
