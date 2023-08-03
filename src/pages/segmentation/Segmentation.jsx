import React from "react";
import "./Segmentation.css";
// import '../socials/socail.css'
import Chat from "../../components/Chat";
import ProgressBar from "../../components/ProgressBar";
import Chart from "../Chart";
import Income from "../Incomechart";
import axios from "axios";
import One from "../../../public/imgs/1person.svg";
import Two from "../../../public/imgs/2person.svg";
import Three from "../../../public/imgs/3person.svg";
import Four from "../../../public/imgs/4person.svg";
import Retail from "../../../public/imgs/Retail.svg";
import Education from "../../../public/imgs/Education.svg";
import Computer from "../../../public/imgs/Computer.svg";
import Finance from "../../../public/imgs/Finance.svg";
import Government from "../../../public/imgs/Government.svg";





// import Retail from "../../../public/im"
// import data from "../../components/chart";

const Segmentation = () => {
  const [Geographic, setGeographic] = React.useState("");
  const [Demographic, setDemographic] = React.useState("");
  const [Audience, setAudience] = React.useState("");
  // const [worldMap, setWorldMap] = useState();
  // const [topConversations, setTopConverastion] = useState([]);

  const fetchGeographic = async () => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API
      }/apis/segmentation/geographic_distribution/`
    );
    setGeographic(response.data?.posts);
  };
  React.useEffect(() => {
    fetchGeographic();
  }, []);

  const fetchDemographic = async () => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API
      }/apis/segmentation/demographic_distribution/`
    );
    setDemographic(response.data?.posts);
  };
  React.useEffect(() => {
    fetchDemographic();
  }, []);

  const fetchAudience = async () => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API
      }/apis/segmentation/audience_interest_behaviour/`
    );
    setAudience(response.data?.posts);
  };
  React.useEffect(() => {
    fetchAudience();
  }, []);

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

          <div className="Household-container">
            <h3>Household Size</h3>
            <div className="flex-general">
            <div className="flex-ontop">
              <div className="top_1"></div>
              <div className="top_2"></div>
              <div className="top_3"></div>
              <div className="top_4"></div>
            </div>
            <div className="flex-beside">
            <div className="person">
              <p><img src={One}/>1 Person</p>
              <p><img src={Two}/>2 Person</p>
              <p><img src={Three}/>3 Person</p>
              <p><img src={Four}/>4 Person</p>
            </div>
            <div className="percentage">
              <p>23.40%</p>
              <p>23.40%</p>
              <p>42.13%</p>
              <p>21.53%</p>
            </div>
            </div>
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
          <h2>Audience interests and Behaviors</h2>

          <div className="flex-Aundience">
            <div className="Education">
              <span>
                <img className="retail" src={Retail} alt="" />
                <h4>60.46%</h4>
                <p>Retail</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img
                  className="retail"
                  src={Education}
                  alt=""
                />
                <h4>60.36%</h4>
                <p>Education</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img
                  className="retail"
                  src={Computer}
                  alt=""
                />
                <h4>59.31%</h4>
                <p>Software</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img className="retail" src={Finance}alt="" />
                <h4>41.05%</h4>
                <p>Finance</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img
                  className="retail"
                  src={Government}
                  alt=""
                />
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
