export const DateFormat = function(_strDate) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }).format(new Date(_strDate));
};
