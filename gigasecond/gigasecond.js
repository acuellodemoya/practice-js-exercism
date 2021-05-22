
export const gigasecond = (date) => {
  let gigaSecond = new Date(date.getTime() + (10**12));
  return gigaSecond;
};
