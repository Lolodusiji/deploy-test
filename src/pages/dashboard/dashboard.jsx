import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Line } from 'react-chartjs-2';
import './dashboard.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
  } from "chart.js";
  ChartJS.register(CategoryScale, LinearScale, BarElement);
import Chart from 'chart.js/auto';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PiChartDonutDuotone } from 'react-icons/pi';
import { PiMountainsFill } from 'react-icons/pi';
import ProgressBar from "@ramonak/react-progress-bar";
import Speedometer from '../../../public/imgs/speedometer';
import Mout from '../../../public/imgs/mout';
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
function dashboard() {
    const [trends, settrends] = useState()
    const [years, setyears] = useState()
    const [keywords, setkeywords] = useState({})
    const [mono_valu, setmono_valu] = useState()
    const [market, setmarket] = useState()
    const [bussins, setbussins] = useState()


    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_API}/apis/dashboard/market_growth/`).then((res)=> res.json())
        .then((data)=>{
            settrends(data.trend)
            setyears(data.years)
        })

        fetch(`${import.meta.env.VITE_BACKEND_API}/apis/dashboard/top_google_searches/`).then((res)=> res.json())
        .then((data)=>{
            setkeywords(data)
        })
        fetch(`${import.meta.env.VITE_BACKEND_API}/apis/dashboard/division_of_market_share/`).then((res)=> res.json())
        .then((data)=>{
            setmono_valu(data.monopoly)
        })
        fetch(`${import.meta.env.VITE_BACKEND_API}/apis/dashboard/total_reachable_market/`).then((res)=> res.json())
        .then((data)=>{
  
            setmarket(data.total_reachable_market)
        })
        fetch(`${import.meta.env.VITE_BACKEND_API}/apis/dashboard/business_score/`).then((res)=> res.json())
        .then((data)=>{
         
            setbussins(data.business_score)
        })

    }, [])
    
    ChartJS.defaults.font.family = "poppins";
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'bottom',
                ltr: true,
                display:false,
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    // padding: 20,
                    color: 'white',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    
                    color: 'rgba(255, 255, 255, 60%)',
                    font: {
                        size: 11
                    }
                },
                grid: {
                    
                    drawBorder: false,
                    display: false,
                  },
            },
            y: {
                ticks: {
                    color: 'rgba(255, 255, 255, 60%)',
                    font: {
                        size: 11
                    }
                },  
                 grid: {
                    color: 'rgba(255, 255, 255, 7%)',
                  },
            },
        },
    };

    const line_data1 = {
        labels:years,
        // labels:["2002",'2004','2006','2008',"2010","2012","2014","2016","2018","2020","2022"],
        datasets: [{
           
            data: trends,
            // data: [65, 59, 80, 81, 56, 55, 40,80,100,20,70],
            fill: false,
            borderColor: '#EC762E',
            tension: 0.1
          }]
      };
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
    <div className="dashboard">
      <div className="first_line">
            <div className="line_grid">
                <h1 style={{fontFamily: "poppins"}}>MARKET GROWTH</h1>
                <h6 className="h6_tit">The market research industry has seen consistent growth over the last 5 years, and is expected to grow by 12.3% in 2023</h6>
                 <div style={{height:"38vh"}} className='line_div'>
                     <Line options={options} data={line_data1} style={{height:"100%",width:"100%"}}/>
                 </div>
                 
            </div>

            <div className='google_sear'>
                <h3 style={{fontFamily: "poppins"}}>Top Google Searches</h3>
                <hr />
                { keywords?.volume?.map((e,i) => {
                        return(
                        <div key={i} className="search_res">
                            <div className="result_val">
                            <Checkbox
                                icon={<Icon.FiCheck color="#174A41" size={14} />}

                                onChange={(value, event) => {
                                let p = {
                                    isTrue: value,
                                };
                                
                                }}
                                borderColor="black"
                                style={{ cursor: "pointer",border:"1px solid black" }}
                            />
                                <div style={{fontWeight:"500",fontFamily: "Poppins"}}>{keywords.keywords[i]}</div>
                            </div>
                                <h4 style={{fontFamily: "poppins"}}>{keywords.volume[i]}</h4>
                        </div>
                        )  
                    })
                }
            </div>
      </div>

      <div className="sec_line">
            <div className='speedochart'>
                <div className='speedo_title'> 
                    <Speedometer/>
                    <h6 style={{fontFamily: "poppins", fontSize: "18px", fontWeight:"600" ,color:"#141414"}}>Business Score</h6>
                </div>
                <div className='speedo'>
                    <CircularProgressbar
                    value={bussins}
                    text={`${bussins}%`}
                    circleRatio={0.75}
                    styles={buildStyles({
                    rotation: 1 / 2 + 1 / 8,
                    strokeLinecap: "butt",
                    trailColor: "#F9FFF9",
                    textColor: '#141414',
                    fontFamily: "poppins",
                    textSize: '30px',
                    textAlign:"center",
                
                    })}
                    />
                </div>
            </div>

            <div className='loader_chart'>
                <div className='loader_title'>
                    <Mout/>
                    <h6 style={{color:"black",fontWeight:"700",fontFamily:"Poppins"}}>+ 23</h6> 
                 </div>
                <div className='loader_cont'> 
                    <div style={{fontSize:"14px",fontWeight:"400", fontFamily:"poppins"}}>Division of market share among the market players</div>
                    <ProgressBar completed={mono_valu}  isLabelVisible={false}
                    barContainerClassName="bar_class"
                    />
                    <div className='loader_label'>
                        <p className='label_loader'>Monopoly</p>
                        <p className='label_loader'>Competitive</p>
                    </div>
                </div>
            </div>

            <div className='info_wid'>
                <h1 style={{fontSize:"1.5rem",fontFamily:"Poppins"}}>TOTAL REACHABLE MARKET</h1>
                <div style={{fontSize:"12px",fontWeight:"600",color:" rgba(255, 255, 255, 0.40)",fontFamily:"Poppins"}}>Estimated number of people you can reach online every month</div>
                <h1 style={{fontFamily:"Poppins",fontSize:"30px",fontWeight:"600"}}>{market}</h1>
            </div>
      </div>
    </div>
  )
}

export default dashboard