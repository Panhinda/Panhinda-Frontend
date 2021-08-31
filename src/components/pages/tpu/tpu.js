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
                  <h2>සිංහල පද ගලපමු-දෙවන පිටපත</h2>
                </div>
              </div>{" "}
              <div className="row row-details">
                <div className="col-xl-5 col-lg-4 layer3-cover txtcolor">
                  පළමු පිටපත සදහා සහය :
                  <br /> fushenkao -
                  https://github.com/fushenkao/Sinhala-Lyrics-Gen ,
                  <br /> minimaxir - https://github.com/minimaxir/textgenrnn
                  <br /> පසුතලය : කැටපත් පවුර, සීගිරිය (Sigiri Mirror Wall)
                  <br />
                  http://thenationaltrust.lk/wp-content/uploads/2018/06/nds-nt-sigiriya.pdf
                  <br />
                  වෙනස්කම් වල ඉතිහාසය :
                  <br />
                  https://ksankalpa.blogspot.com/2021/02/panhidalyrics-chages-log.html
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
