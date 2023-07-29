import React from 'react'
import "../competitor/competitor.css";
import Chat from "../../components/Chat";



const competitor = () => {
  return (
    <div className='General'>
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
                
            </div>

            <div className="geography">
                
            </div>
          </div>
            </div>
        </section>
        <Chat />
    </div>
  )
}

export default competitor