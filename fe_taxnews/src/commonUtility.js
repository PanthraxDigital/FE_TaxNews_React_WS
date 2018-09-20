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
    case "/generalTax":
      return 12;
    case "/others":
      return 13;
  }
};

export const getCategory = function(_strCategoryId) {
  switch (_strCategoryId) {
    case 0:
      return "/from-desk";
    case 1:
      return "/top-stories";
    case 2:
      return "/income-tax";
    case 3:
      return "/gst";
    case 4:
      return "/vat-cst";
    case 5:
      return "/excise";
    case 6:
      return "/custom";
    case 7:
      return "/nbfc-rbi";
    case 8:
      return "/sebi";
    case 9:
      return "/roc-company-law";
    case 10:
      return "/jobs";
    case 11:
      return "/finance-budget";
    case 12:
      return "generalTax";
    case 13:
      return "/others";
  }
};
