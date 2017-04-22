// 👀 looks like two spread operators but the first is just the array of arguments
export const partial = (fn, ...args) => fn.bind(null, ...args)