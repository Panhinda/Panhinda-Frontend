import React, { Component } from "react";
import "./tpu.scss";
import axios from "axios";
import Footer from "./../../shared components/footer/footer";
//import { connect } from 'react-redux';
//import { predictionResultV2 } from '../../../redux/actions'

class tpu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //console.log(process.env.REACT_APP_ACTIVE_BACKEND_URL);
   // console.log(process.env.REACT_APP_ACTIVE_BACKEND_TPU_URL);
  }

  submit = (event) => {
    event.preventDefault();
    console.log("submit",this.inputtext.value);
    const data = {
      input: this.inputtext.value,
    };

    axios
      .post(process.env.REACT_APP_ACTIVE_BACKEND_TPU_URL+"/apiTPUJSON",
        data,
        {
          headers: {
            "Access-Control-Allow-Origin":process.env.REACT_APP_ACTIVE_FRONTEND_URL,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.content.value = res.data.output;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="Screens">
        <div className="BANNER">
          <div className="banner-shade">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 main-div">
                  <div style={{ width: "33%" }}>
                    <div style={{ width: "690px", paddingLeft: "70px" }}>
                      <h1>පන්හිඳ - සිංහල පද ගලපමු - දෙවන පිටපත</h1>
                    </div>
                    <div>
                      <div className="layer3-cover">
                      භාෂවේ ඇති කාව්‍යමය බව සිංහල භාෂාව භාවිතා කරන අපේ හැඟීම ප්‍රකාශනයේ හැකියාව පුළුල් කර ඇත. අසිමන්තිකව කාව්‍යමය භාෂාව රසවිඳීම සොයා දෙන්නට පන්හිඳ උත්සහ කරයි.
                      <br/>
දෙවන පිටපතට සහය : https://colab.research.google.com/github/tensorflow/tpu/blob/master/tools/colab/shakespeare_with_tpu_and_keras.ipynb 
<br/>
පසුතලය : වෙස්සගිරිය සෙල්ලිපි (Wessagiri Manuscript) https://www.facebook.com/media/set/?set=a.454180464950026.1073741832.412244795810260&type=3
<br/>
වෙනස්කම් වල ඉතිහාසය : https://ksankalpa.blogspot.com/2021/02/panhidalyrics-chages-log.html
                     </div>
                    </div>
                  </div>
                  <div className="second-side" style={{ width: "63%" }}>
                    <div>
                      <input
                        className="user_input"
                        type="text"
                        ref={(input) => (this.inputtext = input)}
                        placeholder="කැමති ආරම්භක වචන(ය)"
                      />
                      <button
                        className="button"
                        onClick={this.submit}
                        type="submit"
                      >
                        <span>පද ගැළපීම </span>
                      </button>
                    </div>

                    <div>
                      <textarea
                        type="text"
                        ref={(input) => (this.content = input)}
                        placeholder="යෝජිත පද..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default tpu;
