import React, { useEffect, useState } from "react";
import "./Segmentation.css";
// import '../socials/socail.css'
import Chat from "../../components/Chat";
import ProgressBar from "../../components/ProgressBar";
// import Chart from "../Chart";
import Income from "../Incomechart";
import axios from "axios";
import { Bar} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement);
import One from "/imgs/1person.svg";
import Two from "/imgs/2person.svg";
import Three from "/imgs/3person.svg";
import Four from "/imgs/4person.svg";
import Retail from "/imgs/Retail.svg";
import Education from "/imgs/Education.svg";
import Computer from "/imgs/Computer.svg";
import Finance from "/imgs/Finance.svg";
import Government from "/imgs/Government.svg";
import Check from "/imgs/check.svg";
// import {RiCheckboxBlankCircleLine} from 'react-icons/Ri'

// import Retail from "../../../public/im"
// import data from "../../components/chart";

const Segmentation = () => {
  const [bar_info, setbar_info] = useState();
  const [graph_data, setgraph_data] = useState();
  const [graph_val, setgraph_val] = useState();
  const [table, settable] = useState();
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

  const fetchDemographic = async () => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API
      }/apis/segmentation/demographic_distribution/`
    );
    setDemographic(response.data?.posts);
  };

  const fetchAudience = async () => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API
      }/apis/segmentation/audience_interest_behaviour/`
    );
    setAudience(response.data?.posts);
  };

  React.useEffect(() => {
    fetchGeographic();
  }, []);

  React.useEffect(() => {
    fetchDemographic();
  }, []);

  React.useEffect(() => {
    fetchAudience();
  }, []);

  useEffect(() => {
    if (window.Tawk_API) {
      window.Tawk_API.hideWidget();
      Tawk_API.onChatMaximized = null;
      Tawk_API.onChatMinimized = null;
      // Tawk_API.ischatHidden = null ;
    }
  }, []);
  ChartJS.defaults.font.family = "poppins";
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: 'x',
    barThickness: 72, 
    barPercentage: 0.9,
    categoryPercentage: 0.9,
    // options:{
      plugins: {
        legend: {
          position: "bottom",
          ltr: true,
          display: false,
          labels: {
            font: {
              family: 'poppins',
            },
            usePointStyle: true,
            pointStyle: "circle",
            color: "#D2D2D2",
            scales: {
              x: {
                grid: {
                  display: false, // Remove vertical gridlines
                },
              },
              y: {
                beginAtZero: false,
                display: false, // Remove vertical gridlines
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
            },
          },
        },
      },
    // },

    scales: {
      x: {
        ticks: {
          color: "black",
          maxTicksLimit: 6,
        fontFamily: "poppins",
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#999999",
          maxTicksLimit: 6,
        fontFamily: "poppins",
        },
      },
    },
  };
  
  const chartData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55-65', '66+'],
    datasets: [
      {
        data: [15, 50, 21, 11, 5, 3],
        backgroundColor: [
          '#B8B8B8', // Gray
          '#D2D2D2', // Gray
          '#C5C4C4', // Gray
          '#AEAEAE', // Gray
          '#999999', // Gray
          '#7F7F7F', // Gray
        ],
        borderRadius: 6,
        minBarLength: 6,
      },
    ],
  };
  
  const myBarChart = document.getElementById('Age-bar');
  
  // Add a listener for screen width changes
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1300) { // Adjust the screen width as needed
      chartOptions.scales.x.barThickness = 60; // Adjust the percentage as needed
      myBarChart.update(); // Update the chart to reflect the changes
    } else {
      // Reset the bar thickness for larger screens
      chartOptions.scales.x.barThickness = 72; // Default value
      myBarChart.update(); // Update the chart to reflect the changes
    }
  });
  

  return (
    // <div className="p">
    <div className="General">
      <section className="segmentation">
        <div className="Geo-container">
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
                  <p
                    style={{ display: "flex", gap: "5px", fontWeight: "600", color: "#565656", fontFamily: "poppins"}}
                    key={country}
                  >
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
                    <p style={{fontFamily: "poppins"}}>{traffic.text}</p>
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
                  <p style={{fontFamily: "poppins"}} key={trend}>{trend}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="demographic">
          <h1>Demographic Distribution</h1>
          <div className="Age-container">
            <div className="Text">
            <h3 id="heading">Age</h3></div>
            <div className="bar-cont" style={{width:"500px"}}>
            <Bar id='Age-bar' options={chartOptions} data={chartData} />
          </div>
          </div>

          <div className="gender-cont">
          <h3 id="heading">Gender</h3>
          <div className="gender-group">
          {/* <Check/> */}
            <div className="female"><img src={Check}/>Female <p>33.97%</p></div>
            {/* <RiCheckboxBlankCircleLine /> */}
            <div className="male"><img src={Check}/>Male <p>66.03%</p></div>
          </div>
          </div>

          <div className="Income-cont">
          <div className="Text">
            <h3 id="heading">Income</h3></div>
            {/* <div className="flex-cont">
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
              </div> */}
              <div className="graph" style={{width:"500px"}}>
                <Income />
              {/* </div> */}
            </div>
          </div>

          <div className="Edu-Container">
          <div className="Text1">
            <h3 id="heading">Education</h3></div>
            <div className="groupflex2">
              <div className="Edu-progress">
                <div className="flex-Edu">
                  <p>Compulsory or High School</p>
                  <h5 id="h5">47.31%</h5>
                </div>
                <ProgressBar value={47.31} variant="md" />
              </div>

              <div className="Edu-progress">
                <div className="flex-Edu">
                  <p>University or College</p>
                  <h5 id="h5">42.85%</h5>
                </div>
                <ProgressBar value={42.85} variant="md" />
              </div>

              <div className="Edu-progress">
                <div className="flex-Edu">
                  <p>Postgraduate</p>
                  <h5 id="h5">6.33%</h5>
                </div>
                <ProgressBar value={6.33} variant="md" />
              </div>

              <div className="Edu-progress">
                <div className="flex-Edu">
                  <p>Non Completed</p>
                  <h5 id="h5">3.51%</h5>
                </div>
                <ProgressBar value={3.51} variant="md" />
              </div>
            </div>
          </div>

          <div className="Household-container">
          <div className="Text-house">
            <h3 id="heading">Household <br/>Size</h3></div>
            <div className="flex-general">
              <div className="flex-ontop">
                <div className="top_1"></div>
                <div className="top_2"></div>
                <div className="top_3"></div>
                <div className="top_4"></div>
              </div>
              <div className="flex-beside">
                <div className="person">
                  <p>
                    <img src={One} />1 Person
                  </p>
                  <p>
                    <img src={Two} />2 Person
                  </p>
                  <p>
                    <img src={Three} />3 Person
                  </p>
                  <p>
                    <img src={Four} />4 Person
                  </p>
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
          <div className="Text1">
            <h3 id="heading">Employment</h3></div>
            <div className="groupflex">
              <div className="Edu-progress">
                <div className="flex-Edu1">
                  <p>Full-time work</p>
                  <h5 id="h5">42.68%</h5>
                </div>
                <ProgressBar value={42.68} variant="md" />
              </div>

              <div className="Edu-progress">
                <div className="flex-Edu1">
                  <p>Unemployed</p>
                  <h5 id="h5">14.86%</h5>
                </div>
                <ProgressBar value={14.86} variant="md" />
              </div>

              <div className="Edu-progress">
                <div className="flex-Edu1">
                  <p>Part-time work</p>
                  <h5 id="h5">11.99%</h5>
                </div>
                <ProgressBar value={11.99} variant="md" />
              </div>

              <div className="Edu-progress">
                <div className="flex-Edu1">
                  <p>Homemaker</p>
                  <h5 id="h5">9.91%</h5>
                </div>
                <ProgressBar value={9.91} variant="md" />
              </div>

              <div className="Edu-progress">
                <div className="flex-Edu1">
                  <p>Student</p>
                  <h5 id="h5">8.41%</h5>
                </div>
                <ProgressBar value={8.41} variant="md" />
              </div>

              <div className="Edu-progress">
                <div className="flex-Edu1">
                  <p>Business Owner</p>
                  <h5 id="h5">5.6%</h5>
                </div>
                <ProgressBar value={5.6} variant="md" />
              </div>

              <div className="Edu-progress">
                <div className="flex-Edu1">
                  <p>Retired</p>
                  <h5 id="h5">4.81%</h5>
                </div>
                <ProgressBar value={4.81} variant="md" />
              </div>

              <div className="Edu-progress">
                <div className="flex-Edu1">
                  <p>Leave Of Absence</p>
                  <h5 id="h5">1.24%</h5>
                </div>
                <ProgressBar value={3.24} variant="md" />
              </div>

              <div className="Edu-progress">
                <div className="flex-Edu1">
                  <p>Parental Leave</p>
                  <h5 id="h5">0.49%</h5>
                </div>
                <ProgressBar value={2.49} variant="md" />
              </div>
            </div>
          </div>
        </div>

        <div class="outside-demographic">
          <h2>Audience interests and Behaviors</h2>
              <div className="Audience-cont">
          <div className="flex-Aundience">
            <div className="Education">
              <span>
                <img className="retail" src={Retail} alt="" />
                <h4 className="headings">60.46%</h4>
                <p>Retail</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img className="retail" src={Education} alt="" />
                <h4 className="headings">60.36%</h4>
                <p>Education</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img className="retail" src={Computer} alt="" />
                <h4 className="headings">59.31%</h4>
                <p>Software</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img className="retail" src={Finance} alt="" />
                <h4 className="headings">41.05%</h4>
                <p>Finance</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img className="retail" src={Government} alt="" />
                <h4 className="headings">37.23%</h4>
                <p>Government</p>
              </span>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Chat />
    </div>
    // {/* </div> */}
  );
};

export default Segmentation;
