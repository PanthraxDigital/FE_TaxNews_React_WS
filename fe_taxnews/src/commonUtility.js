export const DateFormat = function(_strDate) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }).format(new Date(_strDate));
};

export const getCategoryId = function(_strCategory) {
  switch (_strCategory) {
    case "/from-desk":
      return 0;

    case "/top-stories":
      return 1;

    case "/income-tax":
      return 2;

    case "/gst":
      return 3;

    case "/vat-cst":
      return 4;

    case "/excise":
      return 5;

    case "/custom":
      return 6;

    case "/nbfc-rbi":
      return 7;

    case "/sebi":
      return 8;

    case "/roc-company-law":
      return 9;

    case "/jobs":
      return 10;

    case "/finance-budget":
      return 11;

    case "/others":
      return 12;
  }
};
