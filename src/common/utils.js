//返回一个 minnum～maxnum之间的随机数
export function randomNum(minnum, maxnum) {
  return Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
}