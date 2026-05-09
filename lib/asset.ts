export const basePath = process.env.__NEXT_ROUTER_BASEPATH || ""
export const asset = (path: string) => `${basePath}${path}`
