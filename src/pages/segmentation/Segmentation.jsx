import React from "react";
import "./Segmentation.css";
// import '../socials/socail.css'
import Chat from "../../components/Chat";
import ProgressBar from "../../components/ProgressBar";
import Chart from "../Chart";
import Income from "../Incomechart";
// import Retail from "../../../public/im"
// import data from "../../components/chart";

const Segmentation = () => {
  return (
    <div className="General">
      <section>
        <div className="geo-container">
          <h1>Geographic Distribution</h1>
          <div className="flex-geo">
            {/* COUNTRIES SECTION */}
            <div className="countries">
              <h3>Countries</h3>

              <div>
                {[
                  "United States",
                  "United Kingdom",
                  "Brazil",
                  "Germany",
                  "India",
                  "United state",
                  "United Kingdom",
                  "Brazil",
                  "Germany",
                  "India",
                ].map((country) => (
                  <p key={country}>
                    <span>&gt;</span>
                    {country}
                  </p>
                ))}
              </div>
            </div>

            {/* TRAFFIC SECTION */}
            <div className="Traffic">
              <h3>Traffic</h3>
              <div>
                {[
                  { text: "67.66%", value: 67.66 },
                  { text: "2.64%", value: 2.64 },
                  { text: "1.81%", value: 1.81 },
                  { text: "1.77%", value: 1.77 },
                  { text: "1.73%", value: 1.73 },
                  { text: "67.66%", value: 67.66 },
                  { text: "2.64%", value: 2.64 },
                  { text: "1.81%", value: 1.81 },
                  { text: "1.77%", value: 1.77 },
                  { text: "1.73%", value: 1.73 },
                ].map((traffic) => (
                  <div className="flex-traffic" key={traffic.text}>
                    <p>{traffic.text}</p>
                    <ProgressBar
                      className="progress"
                      variant="sm"
                      value={traffic.value}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* TREND SECTION */}
            <div className="Trend">
              <h3>Trend</h3>
              <div>
                {[
                  "-10.4%",
                  "-21.57%",
                  "+26.07%",
                  "-4.76%",
                  "+1.76%",
                  "-10.34%",
                  "-21.57%",
                  "+26.07%",
                  "-4.76%",
                  "+1.76%",
                ].map((trend) => (
                  <p key={trend}>{trend}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="demographic">
          <h1>Demographic Distribution</h1>
          <div className="Age-container"> 
            <h3>Age</h3>
            <Chart />
          </div>

          <div>
            <h3>Income</h3>
            <div className="flex-cont">
            <div class="flex-income">
              <span>
                <h4>Low</h4>
                <p>64.02%</p>
              </span>
              <span>
                <h4>Medium</h4>
                <p>26.34%</p>
              </span>
              <span>
                <h4>High</h4>
                <p>9.25%</p>
              </span>
            </div>
            <div className="graph">
            <Income />
            </div>
          </div>
          </div>

          <div className="Edu-Container">
            <h3>Education</h3>
            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Compulsory or High School</p>
                <h5>47.31%</h5>
              </div>
              <ProgressBar value={47.31} variant="md" />
            </div>

            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Univerity or College</p>
                <h5>42.85%</h5>
              </div>
              <ProgressBar value={42.85} variant="md" />
            </div>

            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Postgraduate</p>
                <h5>6.33%</h5>
              </div>
              <ProgressBar value={6.33} variant="md" />
            </div>

            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Non Completed</p>
                <h5>3.51%</h5>
              </div>
              <ProgressBar value={3.51} variant="md" />
            </div>
          </div>


          <div className="Employment-container">
          <h3>Employment</h3>
            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Full-time work</p>
                <h5>42.68%</h5>
              </div>
              <ProgressBar value={42.68} variant="md" />
            </div>

            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Unemployed</p>
                <h5>14.86%</h5>
              </div>
              <ProgressBar value={14.86} variant="md" />
            </div>

            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Part-time work</p>
                <h5>11.99%</h5>
              </div>
              <ProgressBar value={11.99} variant="md" />
            </div>

            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Homemaker</p>
                <h5>9.91%</h5>
              </div>
              <ProgressBar value={9.91} variant="md" />
            </div>

            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Student</p>
                <h5>8.41%</h5>
              </div>
              <ProgressBar value={8.41} variant="md" />
            </div>

            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Business Owner</p>
                <h5>5.6%</h5>
              </div>
              <ProgressBar value={5.6} variant="md" />
            </div>

            
            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Retired</p>
                <h5>4.81%</h5>
              </div>
              <ProgressBar value={4.81} variant="md" />
            </div>

            
            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Leave Of Absence</p>
                <h5>1.24%</h5>
              </div>
              <ProgressBar value={1.24} variant="md" />
            </div>

            
            <div className="Edu-progress">
              <div className="flex-Edu">
                <p>Parental Leave</p>
                <h5>0.49%</h5>
              </div>
              <ProgressBar value={0.49} variant="md" />
            </div>
          </div>
        </div>

        <div class="outside-demographic">
          <h1>Audience interests and Behaviors</h1>

          <div className="flex-Aundience">
            <div className="Education">
              <span>
          <img className='ratail' src="../../../public/imgs/Retail.svg" alt="" />
          <h4>60.46%</h4>
          <p>Retail</p>
              </span>
            </div>

            <div className="Education">
              <span>
          <img className='ratail' src="../../../public/imgs/Education.svg" alt="" />
          <h4>60.36%</h4>
          <p>Education</p>
              </span>
            </div>

            <div className="Education">
              <span>
          <img className='ratail' src="../../../public/imgs/Computer.svg" alt="" />
          <h4>59.31%</h4>
          <p>Software</p>
              </span>
            </div>

            <div className="Education">
              <span>
          <img className='ratail' src="../../../public/imgs/Finance.svg" alt="" />
          <h4>41.05%</h4>
          <p>Finance</p>
              </span>
            </div>

            <div className="Education">
              <span>
          <img className='ratail' src="../../../public/imgs/Government.svg" alt="" />
          <h4>37.23%</h4>
          <p>Government</p>
              </span>
            </div>

          </div>
        </div>
      </section>

      <Chat />
    </div>
  );
};

export default Segmentation;
