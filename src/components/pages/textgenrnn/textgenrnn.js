import React, { Component } from "react";
import "./textgenrnn.scss";
import axios from "axios";
import Footer from "../../shared components/footer/footer";
import Loader from "../../animations/Loading";
import { toast } from "react-toastify";

class textgenrnn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoading: true,
    };
  }
  componentDidMount() {}

  submit = (event) => {
    event.preventDefault();
    console.log("submit");
    this.setState({
      isLoading: true,
    });
    const data = {
      input: this.inputtext.value,
    };
    //process.env.ACTIVE_BACKEND_URL+
    axios
      .post(
        process.env.REACT_APP_ACTIVE_BACKEND_URL + "/apitextgenrnnjson",
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
        <div className="BANNER1">
          <div className="banner-shade">
            <div className="container">
              <div className="row">
                <div className="col col-sm-12 main-head txtcolor">
                  <h2>සිංහල පද ගලපමු-පලමු වෙළුම</h2>
                </div>
              </div>{" "}
              <div className="row row-details">
                <div className="col-xl-5 col-lg-4 layer3-cover txtcolor">
                  <h3>පළමු වෙළුම සදහා සහය : </h3>
                  <div>
                    fushenkao :{" "}
                    <a
                      href="https://github.com/fushenkao/Sinhala-Lyrics-Gen"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sinhala-Lyrics-Gen
                    </a>
                  </div>
                  <div>
                    {" "}
                    minimaxir :
                    <a
                      href="https://github.com/minimaxir/textgenrnn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      textgenrnn
                    </a>{" "}
                  </div>
               {/*    <div>පසුතලය : කැටපත් පවුර, සීගිරිය (Sigiri Mirror Wall)</div>
                  <div>
                    <a
                      href="http://thenationaltrust.lk/wp-content/uploads/2018/06/nds-nt-sigiriya.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      thenationaltrust.lk
                    </a>
                  </div> */}
                   <div>පසුතලය : බ්‍රාහ්මී නොවන සංකේත (Pre-historic Non Brahmin's Symbols)</div>
                  <div>
                    <a
                      href="https://sanskaravinivida.wordpress.com/2020/06/03/%E0%B6%BD%E0%B6%9A%E0%B7%8A%E0%B6%AF%E0%B7%92%E0%B7%80-%E0%B6%BD%E0%B7%9A%E0%B6%9B%E0%B6%B1-%E0%B7%80%E0%B7%92%E0%B6%B4%E0%B7%8A%E0%B6%BD%E0%B7%80%E0%B6%BA/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ලක්දිව ලේඛන විප්ලවය,සංස්කාර විනිවිද
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
                          {isLoading && <Loader />}
                          {!isLoading && <h2>පද ගැළපීම</h2>}
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

export default textgenrnn;
