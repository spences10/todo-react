// 👀 looks like two spread operators but the first is just the array of arguments
// called a rest operator which is an array called args
export const partial = (fn, ...args) => fn.bind(null, ...args)

// pipe in function f and function g, to return another function 💫
// wrap the results of f with the arguments in a call to g
const _pipe = (f, g) => (...args) => g(f(...args))

export const pipe = (...fns) => fns.reduce(_pipe)

