global.Intl = require("intl");
export const DateFormat = function(_strDate) {
  let formatDate = new Date(_strDate);
  return (
    (formatDate.getDate() < 10
      ? "0" + formatDate.getDate()
      : formatDate.getDate()) +
    "-" +
    (formatDate.getMonth() + 1) +
    "-" +
    formatDate.getFullYear()
  );
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
    case "/icai":
      return 10;
    case "/finance-budget":
      return 11;
    case "/generalTax":
      return 12;
    case "/others":
      return 13;
    case "/hidden-tab":
      return 14;
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
      return "/icai";
    case 11:
      return "/finance-budget";
    case 12:
      return "/generalTax";
    case 13:
      return "/others";
    case 14:
      return "/hidden-tab";
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

//Production
export const mapObjectIdWithMenuProd = function(_menuObjectId) {
  switch (_menuObjectId) {
    case "5c0da7b258920b125efbed47":
      return "/from-desk";
    case "5c0da7c858920b125efbed48":
      return "/top-stories";
    case "5c0da7dc58920b125efbed49":
      return "/income-tax";
    case "5c0da7f758920b125efbed4a":
      return "/gst";
    case "5c0da81358920b125efbed4b":
      return "/vat-cst";
    case "5c0da82958920b125efbed4c":
      return "/excise";
    case "5c0da83a58920b125efbed4d":
      return "/custom";
    case "5c0da8bd58920b125efbed4e":
      return "/nbfc-rbi";
    case "5c0da8cb58920b125efbed4f":
      return "/sebi";
    case "5c0da8e658920b125efbed50":
      return "/roc-company-law";
    case "5c0da90358920b125efbed51":
      return "/icai";
    case "5c0da92b58920b125efbed52":
      return "/finance-budget";
    case "5c0da94058920b125efbed53":
      return "/generalTax";
    case "5c0da95f58920b125efbed54":
      return "/others";
  }
};

//Development
export const mapObjectIdWithMenuDev = function(_menuObjectId) {
  switch (_menuObjectId) {
    case "5c09f2d2ad83e006a5cbd25d":
      return "/from-desk";
    case "5c07dd78cc1f9907914e002e":
      return "/top-stories";
    case "5c07ddafcc1f9907914e002f":
      return "/income-tax";
    case "5c07ddbccc1f9907914e0030":
      return "/gst";
    case "5c07ddd0cc1f9907914e0031":
      return "/vat-cst";
    case "5c07ddf1cc1f9907914e0032":
      return "/excise";
    case "5c07ddfccc1f9907914e0033":
      return "/custom";
    case "5c07de0acc1f9907914e0034":
      return "/nbfc-rbi";
    case "5c07de14cc1f9907914e0035":
      return "/sebi";
    case "5c07de22cc1f9907914e0036":
      return "/roc-company-law";
    case "5c07de35cc1f9907914e0037":
      return "/icai";
    case "5c09f46337906706d192c052":
      return "/finance-budget";
    case "5c09f47a37906706d192c053":
      return "/generalTax";
    case "5c09f48837906706d192c054":
      return "/others";
  }
};
