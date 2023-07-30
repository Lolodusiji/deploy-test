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
              <div className="flex-geography">
              <tr>
              <th style={{ borderRadius: "10px 0 0 0" }}>Country</th>
              <th>Traffic</th>
              <th style={{ borderRadius: "0 10px 0 0" }}>Changes</th>
              <div className="flex-table">
               {/* COUNTRIES SECTION */}
               <div className="countries-cont">
                  {/* <h3>Countries</h3> */}

                  <div>
                    {[
                      "United States",
                      "United Kingdom",
                      "Brazil",
                      "Germany",
                      "India",
                    ].map((country) => (
                      <p key={country}>
                        {/* <span>&gt;</span> */}
                        {country}
                      </p>
                    ))}
                  </div>
                </div>

                {/* TRAFFIC SECTION */}
                <div className="Traffic-cont">
                  {/* <h3>Traffic</h3> */}
                  <div>
                    {[
                      { text: "67.66%", value: 67.66 },
                      { text: "2.64%", value: 2.64 },
                      { text: "1.81%", value: 1.81 },
                      { text: "1.77%", value: 1.77 },
                      { text: "1.73%", value: 1.73 },
                    ].map((traffic) => (
                      <div className="flex-traffic" key={traffic.text}>
                        <p>{traffic.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TREND SECTION */}
                <div className="changes-cont">
                  {/* <h3>Changes</h3>/ */}
                  <div>
                    {["-10.4%", "-21.57%", "+26.07%", "-4.76%", "+1.76%"].map(
                      (changes) => (
                        <p key={changes}>{changes}</p>
                      )
                    )}
                  </div>
                </div>
                </div>
            </tr>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <Chat />
    </div>
  );
};

export default competitor;
