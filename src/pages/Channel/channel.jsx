import React from 'react'
import "./channel.css";
import Chat from "../../components/Chat";
import Benchmark from "../Benchmark";
import ProgressBar from "../../components/ProgressBar";



const channel = () => {
  return (
  <div className="General">
    <section>
    <div className="Website">
      <h2>Website Benchmarking</h2>
      <div className="flex-bench">
        <div className="direct">
        <span>
          <h6>Direct</h6>
          <h5>59.97%</h5>
        </span>
          <Benchmark/>
          </div>
        <div className="direct">
        <span>
          <h6>Referral</h6>
          <h5>11.16%</h5>
        </span>
          <Benchmark/>
        </div>  
        <span>
          <h6>Organic Search</h6>
          <h5>25.5%</h5>
          <Benchmark/>
        </span>
        <span>
          <h6>Paid Search</h6>
          <h5>0.15%</h5>
          <Benchmark/>
        </span>
        <span>
          <h6>Organic Search</h6>
          <h5>2.5%</h5>
          <Benchmark/>
        </span>
        <span>
          <h6>Paid Search</h6>
          <h5>0.01%</h5>
          <Benchmark/>
        </span>
        <span>
          <h6>Email</h6>
          <h5>0.69%</h5>
          <Benchmark/>
        </span>
      </div>
      </div> 

      <div className='Channel'>
        <h2>Channel Distribution</h2>

        <div className="channel-group">
        <div className="channel-progress">
              <div className="flex-channel">
              <p> <img className='big_img3' src="/public/imgs/youtube.svg" alt="" />
                Youtube</p>
                <h5>56.54%</h5>
              </div>
              <ProgressBar value={56.54} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
              <p> <img className='big_img3' src="/public/imgs/Facebook.svg" alt="" />
                Facebbok</p>
                <h5>35.63%</h5>
              </div>
              <ProgressBar value={35.63} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
              <p> <img className='big_img3' src="/public/imgs/Instagram.svg" alt="" />
                Instagram</p>
                <h5>24.08%</h5>
              </div>
              <ProgressBar value={24.08} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
              <p> <img className='big_img3' src="/public/imgs/Twitter.svg" alt="" />
                Twitter</p>
                <h5>23.33%</h5>
              </div>
              <ProgressBar value={23.33} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
              <p> <img className='big_img3' src="/public/imgs/Reddit.svg" alt="" />
                Reddit</p>
                <h5>18.69%</h5>
              </div>
              <ProgressBar value={18.69} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
              <p> <img className='big_img3' src="/public/imgs/Tiktok.svg" alt="" />
                Tiktok</p>
                <h5>18.05%</h5>
              </div>
              <ProgressBar value={18.05} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
              <p> <img className='big_img3' src="/public/imgs/Linkedin.svg" alt="" />
                Linkedin</p>
                <h5>12.49%</h5>
              </div>
              <ProgressBar value={12.49} variant="fs" />
            </div>
            </div>
      </div>

      <div className="Channel-strategy">
        <h2>Channel Strategy</h2>
        <div className="coming-soon">
          <h3>Coming Soon</h3>
    </div>
      </div>
    </section>
    <Chat/>
  </div>
  )
}

export default channel