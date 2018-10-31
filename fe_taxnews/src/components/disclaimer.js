import React from "react";

class Disclaimer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <div
          className="logo"
          style={{
            fontFamily: "georgia",
            textTransform: "none",
            fontSize: "24px"
          }}
        >
          <h2>Disclaimer</h2>
        </div>
        <hr />
        <div className="footerLink">
          <h5>
            By using the services of Taxknowledge.in (the “Taxknowledge”), you
            expressly understand and agree that:
          </h5>
          <br />
          <ul>
            <li>
              In no event we are liable for any direct, indirect, punitive,
              incidental, special, consequential damages, or any damages
              whatsoever, including without limitation damages for loss of use,
              data or profits, arising out of the use or performance or
              inability to use the Taxknowledge web site or related services. At
              any stage, if you are dissatisfied with any portion of the
              Taxknowledge web site, or with any of these terms of use, your
              sole and exclusive remedy is to discontinue the website.
            </li>
            <li>
              <p>
                Every effort has been made to avoid errors or omissions. In
                spite of this, errors may creep in. Any mistake, error or
                discrepancy noted may be brought to our notice which shall be
                taken care of. It is notified that neither Taxknowledge nor the
                authors will be responsible for any damage or loss of action to
                any one, of any kind, in any manner, therefrom. It is suggested
                that to avoid any doubt the reader should cross-check all the
                facts, law and contents of the material on web with original
                Government publication or notifications.
              </p>
              <p>
                The material contained on this site and on the associated web
                pages is general information and is not intended to be advice on
                any particular matter. Subscribers and readers should seek
                appropriate professional advice before acting on the basis of
                any information contained herein. Taxknowledge.in, its members,
                owners, employees, agents, representatives and the authors
                expressly disclaim any and all liability to any person, whether
                a subscriber or not, in respect of anything and of the
                consequences of anything done or omitted to be done by any such
                person in reliance upon the contents of this site and associated
                web pages.
              </p>
              <p />
            </li>
            <li>
              <p>Taxknowledge makes no warranty that</p>
              <ul>
                <li>The service will meet your requirements</li>
                <li>
                  The service will be uninterrupted, timely, secure, or
                  error-free.
                </li>
                <li>
                  The results that may be obtained from the use of this service
                  will be accurate or reliable
                </li>
                <li>
                  The quality of any products, services, information, or other
                  material purchased or obtained by you through the use of the
                  service will meet your expectations
                </li>
                <li>Any errors in the software will be corrected</li>
                <li>
                  Any material downloaded or otherwise obtained through the use
                  of the service is done at your own discretion and risk that
                  you will be solely responsible for any damage to your computer
                  system or loss of data that results from the download of any
                  such material
                </li>
                No Advice or information, whether oral or written obtained by
                you from Taxknowledge, or through the service shall create any
                warranty/liability against Taxknowledge.
              </ul>
            </li>
            <li>
              In respect of any products, services and related material
              purchased on the Taxknowledge web site, Taxknowledge hereby
              disclaims all warranties and conditions, including all implied
              warranties and conditions of merchantability and refunds. If you
              are dissatisfied with any products, service or related material
              purchased on the Taxknowledge web site, your sole and exclusive
              remedy is to directly contact the manufacturer, who alone shall be
              entitled to entertain any claim on the suitability, reliability,
              availability, timeliness, accuracy and refund on their respective
              products, services or related material.
            </li>
            <li>
              Taxknowledge and/or its directors, employees, agents,
              representatives and authors make no representations about the
              suitability, reliability, availability, time lines and accuracy of
              the information, products, services and related material contained
              on the Taxknowledge web site for any purpose. All such
              information, software, products, services and related material are
              provided “as is”.
            </li>
            <li>
              At any stage if you are dissatisfied with any portion of the
              Taxknowledge web site, or with any of these terms of use, your
              sole and exclusive remedy is to discontinue the Taxknowledge web
              site.
            </li>
            <li>
              The relationship between you and Taxknowledge shall be governed by
              the Laws of India. You and Taxknowledge agree to submit to the
              personal and exclusive jurisdiction of the courts located at
              Mumbai, India.
            </li>
            <li>
              Taxknowledge reserves the right, at any time to modify, alter, or
              update these terms of use and Disclaimer, and you are bound by
              such modifications, alterations, or updates.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Disclaimer;
