import React from "react";
var fs = require("fs");

class ShowAdsTxt extends React.Component {
  render() {
    return `google.com, pub-4354135056247821, DIRECT, 9862829209`;
  }
}

//   handleClick = () => {
//     fetch("/ads.txt")
//       .then(r => r.text())
//       .then(text => {
//         console.log(text);
//       });
//   };

export default ShowAdsTxt;
