import React, { Component } from "react";
class DetailPage extends Component {
    

    constructor(props){
        super(props);
        
    }
  render() {
    return (
      <div className="col-md-9 total-news">
        <div className="content">
          <div className="grid-header">
            <a className="gotosingle" href="#">
              Title Goes Here Title Goes Here Title Goes Here
            </a>
            <ul>
              <li>
                <span>posted by Rahul Sureka</span>
                <span> on 24 August 2018</span>
              </li>
              {/* <li>
                          <a href="#">5000 views</a>
                        </li> */}
            </ul>
          </div>
          <div className="comments">
            <div>
              <p style={{ fontSize: "1.1em" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sagittis pellentesque mi, ut euismod sem malesuada et. Vivamus
                tincidunt elementum eros non egestas. Fusce eu orci vulputate,
                egestas ante sed, feugiat odio. Interdum et malesuada fames ac
                ante ipsum primis in faucibus. Nulla convallis risus metus, a
                posuere libero sagittis non. Ut euismod faucibus sem gravida
                consectetur. In volutpat molestie justo, ac rhoncus felis
                pretium ut. Duis tristique, lectus sed aliquet ornare, odio ex
                auctor sapien, nec fermentum nulla elit sodales justo. Maecenas
                tempus ac turpis sodales mattis. Suspendisse quis orci ut quam
                interdum vestibulum. Fusce finibus pharetra iaculis. Proin
                tincidunt egestas ex eu rhoncus. Sed nec blandit neque, et
                scelerisque mauris. Maecenas suscipit magna vitae eros
                ullamcorper euismod. Duis mi ex, blandit quis ligula nec,
                vulputate suscipit dolor. Curabitur tristique quam vitae
                faucibus interdum. Proin at dolor non tellus commodo aliquet.
                Morbi sed dolor sit amet turpis pharetra rutrum vitae quis
                ligula. Nullam volutpat elit sit amet metus pharetra bibendum.
                Phasellus enim nunc, imperdiet lacinia dui sit amet, viverra
                porta leo. Vivamus id ex ac nisl aliquam tristique vel nec
                augue. Nam maximus nibh lectus, vitae tempor velit faucibus ut.
                Nulla quis nisi aliquam, euismod nunc at, malesuada justo.
                Phasellus eu tempor risus. Proin tincidunt at ipsum vitae
                suscipit. Sed id orci sed nibh congue tincidunt. Sed vitae
                volutpat lacus. Aenean et purus sit amet neque placerat
                malesuada. In hac habitasse platea dictumst. Aliquam molestie
                ultricies consectetur. Mauris non eros tincidunt, feugiat lectus
                quis, vulputate sapien. Donec at magna venenatis, placerat est
                vulputate, tincidunt felis. Sed dignissim bibendum porta.
                Vivamus eu tempus metus. Nunc vitae tortor quis tortor varius
                convallis at ut nunc. Pellentesque non mi congue, tristique nibh
                in, lacinia nulla. Morbi vehicula diam id leo tincidunt, at
                blandit ex bibendum. Nullam eget eros nibh. Nulla pellentesque
                sed sapien sit amet tempor. Proin in nisi arcu. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Sed sodales et
                diam eu volutpat. Integer libero magna, viverra sed iaculis
                faucibus, imperdiet quis nunc. Aliquam erat volutpat. Curabitur
                arcu justo, euismod suscipit diam nec, pharetra ultrices nisl.
                Morbi eu lobortis est, a egestas augue. Pellentesque in
                tincidunt mauris. In fermentum aliquet varius. Morbi interdum
                molestie placerat. Suspendisse et urna dolor. Proin rutrum,
                turpis ut dictum ultrices, eros sem sodales augue, a hendrerit
                nulla dolor vel ex. Phasellus id risus vel metus egestas
                blandit. Donec volutpat in nisi in lacinia. Mauris vel dui
                sagittis arcu hendrerit bibendum. Integer fringilla, risus sed
                luctus posuere, lacus ante euismod purus, et sodales diam risus
                sit amet est. Ut congue elementum turpis, non posuere tellus
                dignissim id.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;

//1. design the detail page - done
//2. add the facebook comment login
//3. display the other news article list at the bottom, related to same category
