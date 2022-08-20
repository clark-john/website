export const getCount = () => localStorage.getItem("count") ?? 0;
export const setCount = (count: number) => localStorage.setItem("count", count);
