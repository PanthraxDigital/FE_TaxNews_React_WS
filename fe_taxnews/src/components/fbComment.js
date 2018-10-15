import React from "react";
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
        data-width="80%"
        data-href={`http://localhost:3000${this.props.pathUrl}`}
        data-numposts="15"
      />
    );
  }
}

export default FBComment;
