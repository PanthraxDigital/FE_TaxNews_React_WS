import React from "react";
import AdSense from "react-adsense";
class FBComment extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.FB.XFBML.parse();
  }
  render() {
    return (
      <div
        className="fb-comments"
        data-colorscheme="dark"
        data-width="100%"
        data-href={`http://www.taxknowledge.in${this.props.pathUrl}`}
        data-numposts="15"
      />
    );
  }
}

export default FBComment;
