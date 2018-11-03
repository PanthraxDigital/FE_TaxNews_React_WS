global.Intl = require("intl");
export const DateFormat = function(_strDate) {
  let formatDate = new Date(_strDate);
  return formatDate.toISOString.split("T")[0];
  // return (
  //   formatDate.getDate() +
  //   "/" +
  //   (formatDate.getMonth() + 1) +
  //   "/" +
  //   formatDate.getFullYear()
  // );
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

export const checkCookie = function() {
  var isTxPopupCookiePresent = getCookie("tx_popup");
  return isTxPopupCookiePresent;
};

export const setCookie = function(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export const getCookie = function(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
