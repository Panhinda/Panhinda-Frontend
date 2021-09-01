import React, { Component } from "react";
import "./tpu.scss";
import axios from "axios";
import Footer from "./../../shared components/footer/footer";
import Loader from "../../animations/Loading";
import { toast } from "react-toastify";

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
    console.log("submit", this.inputtext.value);
    this.setState({
      isLoading: true,
    });
    const data = {
      input: this.inputtext.value,
    };

    axios
      .post(
        process.env.REACT_APP_ACTIVE_BACKEND_TPU_URL + "/apiTPUJSON",
        data,
        {
          headers: {
            "Access-Control-Allow-Origin":
              process.env.REACT_APP_ACTIVE_FRONTEND_URL,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.content.value = res.data.output;
        toast("සාර්ථකයි");

        this.setState({
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        toast("කරුණාකර නැවත උත්සහ කරන්න");
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    var { isLoading } = this.state;
    return (
      <div className="Screens">
        <div className="BANNER">
          <div className="banner-shade">
            <div className="container">
              <div className="row">
                <div className="col col-sm-12 main-head txtcolor">
                  <h2>සිංහල පද ගලපමු-දෙවන වෙළුම</h2>
                </div>
              </div>{" "}
              <div className="row row-details">
                <div className="col-xl-5 col-lg-4 layer3-cover txtcolor">
                <div>
                සිංහල භාෂවේ ඇති කාව්‍යමය බව හැඟීම ප්‍රකාශනයේ හැකියාව පුළුල් කර ඇත. අසිමන්තිකව කාව්‍යමය භාෂාව රසවිඳීම සොයා දෙන්නට පන්හිඳ උත්සහ කරයි.
                </div>
                <div>
                දෙවන පිටපතට සහය</div>
                  <div>
                  colab.research.google.com :{" "}
                    <a
                      href="https://colab.research.google.com/github/tensorflow/tpu/blob/master/tools/colab/shakespeare_with_tpu_and_keras.ipynb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Predict Shakespeare with Cloud TPUs and Keras
                    </a>
                  </div>
                   <div>පසුතලය :  වෙස්සගිරිය සෙල්ලිපි (Wessagiri Manuscript)</div>
                  <div>
                    <a
                      href="https://www.facebook.com/media/set/?set=a.454180464950026.1073741832.412244795810260&type=3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      කටාරම
                    </a>
                  </div>
                  <div>තාක්ෂණික වෙනස්කම් වල ඉතිහාසය :</div>
                  <div>
                  <a
                      href="https://sankalpayak.medium.com/%E0%B7%83%E0%B7%92%E0%B6%82%E0%B7%84%E0%B6%BD-%E0%B6%B4%E0%B6%AF-%E0%B6%9C%E0%B6%BD%E0%B6%B4%E0%B6%B8%E0%B7%94-change-log-528f41be0193"
                      target="_blank"
                      rel="noreferrer"
                    >
                      සිංහල පද ගලපමු
                    </a>
                  </div>
                </div>

                <div className="col-xl-7 col-lg-8   second-side txtcolor">
                  <div className="row">
                    <div className="col-12 col-sm-8">
                      <input
                        className="txtcolor"
                        className="user_input"
                        type="text"
                        ref={(input) => (this.inputtext = input)}
                        placeholder="කැමති ආරම්භක වචන(ය)"
                      />
                    </div>
                    <div className="col-12 col-sm-4 txtcolor ">
                      <button
                        className=" button-one"
                        onClick={this.submit}
                        type="submit"
                      >
                        <span className="txtcolor">
                          {" "}
                          {isLoading && <Loader />}
                          {!isLoading && <h2>පද ගැළපීම</h2>}{" "}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="col-12 t-area txtcolor">
                    <textarea
                      className="txtcolor"
                      type="text"
                      ref={(input) => (this.content = input)}
                      placeholder="යෝජිත පද..."
                    />
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
