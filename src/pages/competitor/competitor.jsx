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
                <thead className="head">
                <tr className="row">
                <th >Competitor</th>
                <th >Traffic</th>
                <th >Changes</th>
                </tr>
                </thead>
                <tbody>
                  <tr className="row">
                    <td className="column">United States</td>
                    <td className="column">67.66%</td>
                    <td className="column">9.15%</td>
                  </tr>
                  <tr className="row">
                    <td className="column">United Kingdom</td>
                    <td className="column">30.97%</td>
                    <td className="column">2.03%</td>
                  </tr>
                  <tr className="row">
                    <td className="column">Germany</td>
                    <td className="column">30.41%</td>
                    <td className="column">4.59%</td>
                  </tr>
                  <tr className="row">
                    <td className="column">Mexico</td>
                    <td className="column">39.95%</td>
                    <td className="column">1.05%</td>
                  </tr>
                  <tr className="row"> 
                    <td className="column">Canada</td>
                    <td className="column">38.01%</td>
                    <td className="column">8.99%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="market-share">
          <h1>Market share</h1>
          <table className="share-table">
            <thead className="head2">
              <tr>
                <th>Competitor</th>
                <th>Total</th>
                <th>Direct</th>
                <th>Referral</th>
                <th>Organic Search</th>
                <th>Paid Search</th>
                <th>Organic Social</th>
                <th>Paid Social</th>
                <th>Email</th>
                <th>Display Ads</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img className="big_img3" src={Ebay} alt="" /></td>
                <td>1,236,000</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>19.45%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
              </tr>
              <tr>
                <td><img
                  className="big_img3"
                  src={Amazon}
                  alt=""
                /></td>
                <td>1,236,000</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>19.45%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
              </tr>
              <tr>
               <td><img
                  className="big_img3"
                  src={Flipkart}
                  alt=""
                /></td> 
                <td>1,236,000</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>19.45%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
              </tr>
              <tr>
                <td><img
                  className="big_img3"
                  src={Myntra}
                  alt=""
                /></td>
                <td>1,236,000</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>19.45%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
              </tr>

              <tr>
                <td><img className="big_img3" src={Ajio} alt="" /></td>
                <td>1,236,000</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>19.45%</td>
                <td>11.18%</td>
                <td>11.18%</td>
                <td>11.18%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="market-price">
          <h2>Market Price</h2>
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
