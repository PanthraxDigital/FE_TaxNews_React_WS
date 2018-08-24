import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div style={{ background: "pink", float:'both' }}>
        <div class="footer text-center">
          <div class="bottom-menu">
            <ul>
              <li>
                <a href="index.html">World News</a>
              </li>{" "}
              |
              <li>
                <a href="sports.html">Sports</a>
              </li>{" "}
              |
              <li>
                <a href="tech.html">Techology</a>
              </li>{" "}
              |
              <li>
                <a href="business.html">Business</a>
              </li>{" "}
              |
              <li>
                <a href="movies.html">Movies</a>
              </li>{" "}
              |
              <li>
                <a href="movies.html">Entertainment</a>
              </li>{" "}
              |
              <li>
                <a href="books.html">Books</a>
              </li>{" "}
              |
              <li>
                <a href="movies.html">Culture</a>
              </li>{" "}
              |
              <li>
                <a href="classifieds.html">Classifieds</a>
              </li>{" "}
              |
              <li>
                <a href="blog.html">Blogs</a>
              </li>
            </ul>
          </div>
          <div class="copyright text-center">
            <p>
              The Tax News &copy; 2018 All rights reserved | Powered by{" "}
              <a href="http://panthrax.com">Panthrax Digital Agency</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
