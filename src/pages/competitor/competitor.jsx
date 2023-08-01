import React from "react";
import "../competitor/competitor.css";
import Chat from "../../components/Chat";

const competitor = () => {
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
                <th className="content">Competitor</th>
                <th className="content">Traffic</th>
                <th className="content">Changes</th>
                </tr>
                </thead>
                <tbody>
                  <tr className="row">
                    <th className="content">United States</th>
                    <th className="content">67.66%</th>
                    <th className="content">9.15%</th>
                  </tr>
                  <tr className="row">
                    <th className="content">United Kingdom</th>
                    <th className="content">30.97%</th>
                    <th className="content">2.03%</th>
                  </tr>
                  <tr className="row">
                    <th className="content">Germany</th>
                    <th className="content">30.41%</th>
                    <th className="content">4.59%</th>
                  </tr>
                  <tr className="row">
                    <th className="content">Mexico</th>
                    <th className="content">39.95%</th>
                    <th className="content">1.05%</th>
                  </tr>
                  <tr>
                    <th className="content">Canada</th>
                    <th className="content">38.01%</th>
                    <th className="content">8.99%</th>
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
                <td><img className="big_img3" src="/public/imgs/ebay.svg" alt="" /></td>
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
                  src="/public/imgs/amazon.svg"
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
                  src="/public/imgs/flipkart.svg"
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
                  src="/public/imgs/myntra.svg"
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
                <td><img className="big_img3" src="/public/imgs/ajio.svg" alt="" /></td>
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
