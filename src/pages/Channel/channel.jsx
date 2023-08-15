import React from "react";
import "./channel.css";
import Chat from "../../components/Chat";
import Benchmark from "../Benchmark";
import Distribution from "../../components/Distribution";
import Youtube from "/imgs/youtube.svg";
import Facebook from "/imgs/Facebook.svg";
import Instagram from "/imgs/Instagram.svg";
import Twitter from "/imgs/Twitter.svg";
import Reddit from "/imgs/Reddit.svg";
import Tiktok from "/imgs/Tiktok.svg";
import Linkedin from "/imgs/Linkedin.svg";

const channel = () => {
  const [Website, setWebsite] = React.useState("");
  const [Channel, setChannel] = React.useState("");
  const [Channelstrategy, setChannelstrategy] = React.useState("");

  const fetchWebsite = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_API}/apis/channels/website_benchmarking/`
    );
    setWebsite(response.data?.posts);
    console.log(setWebsite);
  };
  React.useEffect(() => {
    fetchWebsite();
  }, []);

  const fetchChannel = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_API}/apis/channels/channel_distribution/`
    );
    setChannel(response.data?.posts);
  };
  React.useEffect(() => {
    fetchChannel();
  }, []);

  const fetchChannelstrategy = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_API}/apis/channels/channel_strategy/`
    );
    setChannelstrategy(response.data?.posts);
  };
  React.useEffect(() => {
    fetchChannelstrategy();
  }, []);

  React.useEffect(() => {
    if (window.Tawk_API) {
      window.Tawk_API.hideWidget();
    }
    // return () => {
    //   if (window.Tawk_API) {
    //     window.Tawk_API.showWidget();
    //   }
    // };
  }, []);

  return (
    <div className="General">
      <section>
        <div className="Website">
          <h2>Website Benchmarking</h2>
          <div className="flex-content">
            {/* <div className="flex-bench">
              <div className="direct">
                <span>
                  <h6>Direct</h6>
                  <h5>59.97%</h5>
                </span>
              </div>
              <div className="direct">
                <span>
                  <h6>Referral</h6>
                  <h5>11.16%</h5>
                </span>
              </div>
              <div className="directt">
                <span>
                  <h6>Organic Search</h6>
                  <h5>25.5%</h5>
                </span>
              </div>
              <div className="direct">
                <span>
                  <h6>Paid Search</h6>
                  <h5>0.15%</h5>
                </span>
              </div>
              <div className="direct">
                <span>
                  <h6>Organic Search</h6>
                  <h5>2.5%</h5>
                </span>
              </div>
              <div className="direct">
                <span>
                  <h6>Paid Search</h6>
                  <h5>0.01%</h5>
                </span>
              </div>
              <div className="direct">
                <span>
                  <h6>Email</h6>
                  <h5>0.69%</h5>
                </span>
              </div>
            </div> */}
            <Benchmark />
          </div>
        </div>

        <div className="Channel">
          <h2>Channel Distribution</h2>

          <div className="channel-group">
            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Youtube} alt="" />
                  Youtube
                </p>
                <h5>56.54%</h5>
              </div>
              <Distribution value={56.54} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Facebook} alt="" />
                  Facebook
                </p>
                <h5>35.63%</h5>
              </div>
              <Distribution value={35.63} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Instagram} alt="" />
                  Instagram
                </p>
                <h5>24.08%</h5>
              </div>
              <Distribution value={24.08} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Twitter} alt="" />
                  Twitter
                </p>
                <h5>23.33%</h5>
              </div>
              <Distribution value={23.33} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Reddit} alt="" />
                  Reddit
                </p>
                <h5>18.69%</h5>
              </div>
              <Distribution value={18.69} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Tiktok} alt="" />
                  Tiktok
                </p>
                <h5>18.05%</h5>
              </div>
              <Distribution value={18.05} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Linkedin} alt="" />
                  Linkedin
                </p>
                <h5>12.49%</h5>
              </div>
              <Distribution value={12.49} variant="fs" />
            </div>
          </div>
        </div>

        <div className="Channel-strategy">
          <h2>Channel Strategy</h2>
          <div className="coming-soon">
            <h3>Coming Soon</h3>
          </div>
        </div>
      </section>
      <Chat />
    </div>
  );
};

export default channel;
