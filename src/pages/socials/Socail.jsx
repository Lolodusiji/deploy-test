import React, { useEffect, useState } from 'react'
import './Socail.css'
import Important from './market_info/Important'
import Latest from './market_info/Latest'
import { Bar } from 'react-chartjs-2';
import { BsSendFill } from 'react-icons/bs';


function Socail() {

    const [bar_info, setbar_info] = useState()
    const [graph_data, setgraph_data] = useState()
    const [graph_val, setgraph_val] = useState()
    const [table, settable] = useState()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_API}/apis/social/market_sentiment`).then((res)=> res.json())
        .then((data)=>{
            setbar_info(data)
        })

        fetch(`${import.meta.env.VITE_BACKEND_API}/apis/social/correlated_keywords`).then((res)=> res.json())
        .then((data)=>{
            setgraph_data(Object.keys(data))
            setgraph_val(Object.values(data))
        })

        fetch(`${import.meta.env.VITE_BACKEND_API}/apis/social/query_search_volume`).then((res)=> res.json())
        .then((data)=>{
            // console.log(data);
            settable(data)
        })

    }, [])
    

    const option = {
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
                    color: 'black',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'black',
                },
            },
            y: {
                ticks: {
                    color: '#7E7E7E',
                },
            },
        },
    };
    const data = {
        labels : graph_data,
        // labels : ['Demographs','Trends','Segmatations','Analytics','Forecasting','Behavior','Competition','Opportunity'],
        
        datasets: [
          {
            // label:"Sep 1, 2022",
            data:graph_val,
            // data:[30,23,43,56,75,100,80,60],
            backgroundColor: ['#FD6333'],
            borderRadius: 6,
          }, 
        ],
      };

  return (
    <div className='socail'>
        <div className='market'>
            <div className='market_stats'>
                <h2 style={{fontWeight:"700",fontSize:"20px"}}>Market Sentiment</h2>
                <div className='stats_wrapper'>
                        <div className='percent'>
                            <div className='per_num'>{`${bar_info?.positive}%`}</div>
                            <div className='per_name'>Positive</div>
                        </div>

                        <div className='percent'>
                            <div className='per_num'>{`${bar_info?.neutral}%`}</div>
                            <div className='per_name'>Neutral</div>
                        </div>

                        <div className='percent'>
                            <div className='per_num'>{`${bar_info?.negative}%`}</div>
                            <div className='per_name'>Negative</div>
                        </div>

                        <div className='percent'>
                            <div className='per_num'>{`${bar_info?.mixed}%`}</div>
                            <div className='per_name'>Mixed</div>
                        </div>
                </div>
            </div>

            <div className='market_info'>
                <Important/>
                <Latest/>
            </div>

            <div className='bar_market'>
                <div className='keywords_header'>
                    <h2>Correlated Keywords</h2>
                    <h4 style={{color:"#9A9A9A",fontWeight:"500"}}>Market Research</h4>
                </div>
                <div>
                    <Bar options={option} data={data}/>
                </div>
            </div>

            <div className='search_table'>
                <h2></h2>
                <table>
                    <tr>
                        <th style={{borderRadius:"10px 0 0 0"}}>Query</th>
                        <th>Monthly Searches</th>
                        <th style={{borderRadius:"0 10px 0 0"}}>Competition</th>
                    </tr>
                   { table?.items.map((e,i)=>{
             
                    return(
                        <tr key={i}>
                            <td>{e.query}</td>
                            <td>{e.monthly_searches}</td>
                            <td>{ e.competition == "low"&&
                                     <div className='table_card' style={{ backgroundColor: "#1AB40D"}}>{e.competition}</div>
                                }
                                { e.competition == "medium"&&
                                     <div className='table_card' style={{backgroundColor:"transparent",color:"black",border:"1px solid black"}}>{e.competition}</div>
                                }
                                { e.competition == "high"&&
                                     <div className='table_card' style={{backgroundColor:"#FD6333"}}>{e.competition}</div>
                                }
                               
                            </td>
                        </tr>
                    )
                   })
                    }
                    <tr>
                        <td>market survey</td>
                        <td>4,400</td>
                        <td><div className='table_card' style={{backgroundColor:"#1AB40D"}}>Low</div></td>
                    </tr>
                    <tr>
                        <td>paid focus groups </td>
                        <td>1,900</td>
                        <td><div className='table_card' style={{backgroundColor:"#1AB40D"}}>Low</div></td>
                    </tr>
                    <tr>
                        <td>market research companies</td>
                        <td>4,400</td>
                        <td><div className='table_card' style={{backgroundColor:"transparent",color:"black",border:"1px solid black"}}>Medium</div></td>
                    </tr>
                    <tr>
                        <td>paid market research</td>
                        <td>4,400</td>
                        <td><div className='table_card' style={{backgroundColor:"#FD6333"}}>High</div></td>
                    </tr>
                    <tr>
                        <td>market study</td>
                        <td>4,400</td>
                        <td><div className='table_card' style={{backgroundColor:"transparent",color:"black",border:"1px solid black"}}>Medium</div></td>
                    </tr>
                    <tr>
                        <td>market study</td>
                        <td>4,400</td>
                        <td><div className='table_card' style={{backgroundColor:"transparent",color:"black",border:"1px solid black"}}>Medium</div></td>
                    </tr>
                    <tr>
                        <td>market survey</td>
                        <td>4,400</td>
                        <td><div className='table_card' style={{backgroundColor:"#1AB40D"}}>Low</div></td>
                    </tr>
                    <tr>
                        <td>market survey</td>
                        <td>4,400</td>
                        <td><div className='table_card' style={{backgroundColor:"#1AB40D"}}>Low</div></td>
                    </tr>
                        <tr>
                        <td>market research companies</td>
                        <td>4,400</td>
                        <td><div className='table_card' style={{backgroundColor:"transparent",color:"black",border:"1px solid black"}}>Medium</div></td>
                    </tr>
                    <tr>
                        <td>paid market research</td>
                        <td>4,400</td>
                        <td><div className='table_card' style={{backgroundColor:"#FD6333"}}>High</div></td>
                    </tr>
                    <tr>
                        <td>market study</td>
                        <td>4,400</td>
                        <td><div className='table_card' style={{backgroundColor:"transparent",color:"black",border:"1px solid black"}}>Medium</div></td>
                    </tr>
                    <tr>
                        <td>market study</td>
                        <td>4,400</td>
                        <td><div className='table_card' style={{backgroundColor:"transparent",color:"black",border:"1px solid black"}}>Medium</div></td>
                    </tr>
                   
                 
                </table>
            </div>

        </div>

        <div className='chat_market'>
            <div className='market_input'>
                <input type="text" placeholder='Ask Savanna for insights' />
                <BsSendFill color='#8C8C8C' size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Socail