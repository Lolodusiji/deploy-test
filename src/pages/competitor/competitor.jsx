import React from "react";
import "../competitor/competitor.css";
import Chat from "../../components/Chat";
import Ebay from "/imgs/ebay.svg";
import Amazon from "/imgs/amazon.svg";
import Flipkart from "/imgs/flipkart.svg";
import Myntra from "/imgs/myntra.svg";
import Ajio from "/imgs/ajio.svg";

const competitor = () => {
  const [Competitive, setCompetitive] = React.useState("");
  const [Socio, setSocio] = React.useState("");
  const [Geography, setGeography] = React.useState("");
  const [Marketshare, setMarketshare] = React.useState("");
  const [Marketprice, setMarketprice] = React.useState("");

  const fetchCompetitive = async () => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API
      }/apis/competitor/competitive_targeting/`
    );
    setCompetitive(response.data?.posts);
  };
  React.useEffect(() => {
    fetchCompetitive();
  }, []);

  const fetchSocio = async () => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API
      }/apis/competitor/socioeconomics/`
    );
    setSocio(response.data?.posts);
  };
  React.useEffect(() => {
    fetchSocio();
  }, []);

  const fetchGeography = async () => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API
      }/apis/competitor/geography/`
    );
    setGeography(response.data?.posts);
  };
  React.useEffect(() => {
    fetchGeography();
  }, []);

  const fetchMarketshare = async () => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API
      }/apis/competitor/market_share/`
    );
    setMarketshare(response.data?.posts);
  };
  React.useEffect(() => {
    fetchMarketshare();
  }, []);

  const fetchMarketprice = async () => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API
      }/apis/competitor/market_prices/`
    );
    setMarketprice(response.data?.posts);
  };
  React.useEffect(() => {
    fetchMarketprice();
  }, []);

  React.useEffect(() => {
    if (window.Tawk_API) {
      window.Tawk_API.hideWidget();
    }
    return () => {
      if (window.Tawk_API) {
        window.Tawk_API.showWidget();
      }
    };
  }, []);

  return (
    <div className="General">
      <section>
        <div className="competitive">
          <h1>Competitive Targeting</h1>

          <div className="stats_wrapper">
            <div className="percent">
              <span>
                <p>Reach</p>
                <h3>228.1M</h3>
              </span>
            </div>

            <div className="percent">
              <span>
                <p>Age</p>
                <h3>228.1M</h3>
                <p>39.95%</p>
              </span>
            </div>

            <div className="percent">
              <span>
                <p>Gender</p>
                <h3>Male</h3>
                <p>65.19%</p>
              </span>
            </div>

            <div className="percent">
              <span>
                <p>Income</p>
                <h3>Low</h3>
              </span>
            </div>
          </div>

          <div className="flex-target">
            <div className="socio">
              <h2>Socioeconomics</h2>
              <div className="Grid-socio">
                <div className="household" id="household">
                  <span>
                    <p>Household-size</p>
                    <h4>3-4 Person</h4>
                    <p>41.4%</p>
                  </span>
                </div>

                <div className="household" id="education">
                  <span>
                    <p>Education-level</p>
                    <h4>High Schoool</h4>
                    <p>49.29%</p>
                  </span>
                </div>

                <div className="household" id="employment">
                  <span>
                    <p>Employment-Status</p>
                    <h4>Full-time</h4>
                    <p>43.82%</p>
                  </span>
                </div>

                <div className="household" id="interest">
                  <span>
                    <p>Interest</p>
                    <h4>Low</h4>
                    <p>64.66%</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="geography">
              <h2>Geography</h2>
              <table className="stat">
                <thead id="head">
                <tr id="rowww">
                <th >Competitor</th>
                <th >Traffic</th>
                <th >Changes</th>
                </tr>
                </thead>
                <tbody>
                  <tr id="row">
                    <td id="column">United States</td>
                    <td id="column">67.66%</td>
                    <td id="column">9.15%</td>
                  </tr>
                  <tr id="row">
                    <td id="column">United Kingdom</td>
                    <td id="column">30.97%</td>
                    <td id="column">2.03%</td>
                  </tr>
                  <tr id="row">
                    <td id="column">Germany</td>
                    <td id="column">30.41%</td>
                    <td id="column">4.59%</td>
                  </tr>
                  <tr id="row">
                    <td id="column">Mexico</td>
                    <td id="column">39.95%</td>
                    <td id="column">1.05%</td>
                  </tr>
                  <tr id="row"> 
                    <td id="column">Canada</td>
                    <td id="column">38.01%</td>
                    <td id="column">8.99%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="market-share">
          <h1>Market share</h1>
          <table id="share-table">
            <thead className="head2">
              <tr>
                <th id="share-head">Competitor</th>
                <th id="share-head">Total</th>
                <th id="share-head">Direct</th>
                <th id="share-head">Referral</th>
                <th id="share-head">Organic Search</th>
                <th id="share-head">Paid Search</th>
                <th id="share-head">Organic Social</th>
                <th id="share-head">Paid Social</th>
                <th id="share-head">Email</th>
                <th id="share-head">Display Ads</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="share-content"><img className="big_img3" src={Ebay} alt="" /></td>
                <td id="share-content">1,236,000</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">19.45%</td>
                <td id="share-content">11.18%</td> 
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
              </tr>
              <tr>
                <td id="share-content"><img
                  className="big_img3"
                  src={Amazon}
                  alt=""
                /></td>
                <td id="share-content">1,236,000</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">19.45%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
              </tr>
              <tr>
               <td id="share-content"><img
                  className="big_img3"
                  src={Flipkart}
                  alt=""
                /></td> 
                <td id="share-content">1,236,000</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">19.45%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
              </tr>
              <tr>
                <td id="share-content"><img
                  className="big_img3"
                  src={Myntra}
                  alt=""
                /></td>
                <td id="share-content">1,236,000</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">19.45%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
              </tr>

              <tr>
                <td id="share-content"><img className="big_img3" src={Ajio} alt="" /></td>
                <td id="share-content">1,236,000</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">19.45%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
                <td id="share-content">11.18%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="market-price">
          <h2>Market Prices</h2>
          <div className="coming-soon">
            <h3>Coming Soon</h3>
          </div>
        </div>
      </section>
      <Chat />
    </div>
  );
};

export default competitor;
