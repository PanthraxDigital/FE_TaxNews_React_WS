import React, { Component } from "react";
import axios from "axios";
import { URL } from "../networkUtility";
import { DateFormat, getCategoryId, getCategory } from "../commonUtility";
import { Link } from "react-router-dom";
import FBComment from "./fbComment";
import { Helmet } from "react-helmet";
import AdSense from "react-adsense";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  EmailShareButton,
  EmailIcon,
  TelegramIcon,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon
} from "react-share";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    let pathname = String(this.props.location.pathname);
    let shareUrl = `http://www.taxknowledge.in/${pathname}`;
    this.categoryId = pathname.substring(
      pathname.indexOf("/"),
      pathname.lastIndexOf("/")
    );
    this.articleId = pathname.substring(
      pathname.lastIndexOf("/") + 1,
      pathname.length
    );
    this.dataURL = `${URL}${getCategoryId(this.categoryId)}/${this.articleId}`;
    this.state = {
      isLoading: true,
      detailArticle: [],
      sharebleUrl: shareUrl
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.match.params.articleId !== this.props.match.params.articleId
    ) {
      this.dataURL = `${URL}${getCategoryId(this.categoryId)}/${
        nextProps.match.params.articleId
      }`;
      this.fetchArticleDetail();
    }
  }

  componentDidMount() {
    this.fetchArticleDetail();
  }

  render() {
    window.scrollTo(0, 0);
    let shareUrl = `http://www.taxknowledge.in${this.props.location.pathname}`;
    {
      if (this.state.isLoading) {
        return (
          <div className="total-news">
            <div className="content">
              <div className="grid-header">
                <h3>Loading Please Wait ...</h3>
              </div>
            </div>
          </div>
        );
      } else {
        if (
          this.state.detailArticle != undefined &&
          this.state.detailArticle.length > 0
        ) {
          return (
            <React.Fragment>
              <div>
                <Helmet>
                  <title>
                    {this.state.detailArticle[0].title.substring(0, 60)}
                  </title>
                  <meta
                    property="og:title"
                    content={this.state.detailArticle[0].title.substring(0, 30)}
                  />
                  <meta
                    name="description"
                    content={this.state.detailArticle[0].description.substring(
                      0,
                      150
                    )}
                  />
                  <meta
                    property="og:description"
                    content={this.state.detailArticle[0].description.substring(
                      0,
                      60
                    )}
                  />

                  <meta property="og:url" content={shareUrl} />
                  <meta
                    property="og:image"
                    content="https://imagedesigncom.com/wp-content/uploads/2015/10/300x200.jpg"
                  />
                  <meta property="og:type" content="article" />
                </Helmet>
                <div className="total-news contentScroll">
                  <div className="content">
                    <div className="grid-header">
                      <div className="gotosingle">
                        {this.state.detailArticle[0].title}
                      </div>
                      <ul>
                        <li>
                          <span>
                            posted by{" "}
                            {this.state.detailArticle[0].author != null
                              ? this.state.detailArticle[0].author.name.first +
                                " " +
                                this.state.detailArticle[0].author.name.last
                              : "TaxKnowledge Team"}
                          </span>
                          <span>
                            {" "}
                            on{" "}
                            {DateFormat(
                              this.state.detailArticle[0].articleDate
                            )}
                          </span>
                        </li>
                      </ul>

                      <br />
                      <div>
                        <FacebookShareButton
                          url={`${shareUrl}`}
                          quote={this.state.detailArticle[0].title}
                          className="Demo__some-network__share-button"
                        >
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={shareUrl}
                          title={this.state.detailArticle[0].title}
                          className="Demo__some-network__share-button"
                        >
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>

                        <TelegramShareButton
                          url={shareUrl}
                          title={this.state.detailArticle[0].title}
                          className="Demo__some-network__share-button"
                        >
                          <TelegramIcon size={32} round />
                        </TelegramShareButton>

                        <WhatsappShareButton
                          url={shareUrl}
                          title={this.state.detailArticle[0].title}
                          separator=":: "
                          className="Demo__some-network__share-button"
                        >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>

                        <GooglePlusShareButton
                          url={shareUrl}
                          className="Demo__some-network__share-button"
                        >
                          <GooglePlusIcon size={32} round />
                        </GooglePlusShareButton>

                        <LinkedinShareButton
                          url={shareUrl}
                          title={this.state.detailArticle[0].title}
                          windowWidth={750}
                          windowHeight={600}
                          className="Demo__some-network__share-button"
                        >
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                        <EmailShareButton
                          url={shareUrl}
                          subject={this.state.detailArticle[0].title}
                          body={this.state.detailArticle[0].description}
                          className="Demo__some-network__share-button"
                        >
                          <EmailIcon size={32} round />
                        </EmailShareButton>
                      </div>
                    </div>
                    <br />
                    <div>
                      <AdSense.Google
                        client="ca-pub-4652165289391769"
                        slot="4114300139"
                        layout="in-article"
                        format="fluid"
                        responsive="true"
                      />

                      <div
                        className="mdFormat"
                        style={{ fontSize: "1.1em", paddingTop: "50px" }}
                        dangerouslySetInnerHTML={{
                          __html: this.state.detailArticle[0].description
                        }}
                      />
                      <br />
                    </div>
                  </div>
                  {this.state.detailArticle[0].hasOwnProperty(
                    "attachmentLink"
                  ) ? (
                    <a
                      href={`${this.state.detailArticle[0].attachmentLink}`}
                      target="_blank"
                      type="button"
                      className="btn btn-danger"
                      style={{
                        backgroundColor: "#cf0000",
                        marginBottom: "20px",
                        borderRadius: 0,
                        marginTop: "30px",
                        color: "white"
                      }}
                    >
                      To read the full text click here +
                    </a>
                  ) : (
                    ""
                  )}

                  {this.categoryId === "/from-desk" ? (
                    <div>
                      <Link to="/">BACK</Link>
                    </div>
                  ) : (
                    <div>
                      <Link to={`${this.categoryId}`}>
                        READ MORE FROM{" "}
                        {this.categoryId
                          .replace("-", " ")
                          .substring(1, this.categoryId.length)
                          .toUpperCase()}
                      </Link>
                    </div>
                  )}
                </div>
                <FBComment
                  pathUrl={this.props.location.pathname}
                  style={{ windowWidth: "100%" }}
                />
              </div>
              <AdSense.Google
                client="ca-pub-4652165289391769"
                slot="4114300139"
              />
            </React.Fragment>
          );
        } else {
          return null;
        }
      }
    }
  }

  fetchArticleDetail() {
    axios.get(this.dataURL).then(result => {
      this.setState({
        isLoading: false,
        detailArticle: result.data.articles
      });
    });
  }
}

export default DetailPage;
