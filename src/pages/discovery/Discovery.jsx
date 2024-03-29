import React from 'react'
import './Discovery.css'
import { BsSendFill } from 'react-icons/bs';
import { useEffect } from 'react';
import { useState } from 'react';
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

function Discovery() {
  const [message, setmessage] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/discovery/generate/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:"test@email.com"
      })
    }).then((res)=> res.json())
    .then((data)=>{
     

    })
  
  }, [])
  
  const sent_mess_append = ()=>{
    const sent_mess = document.createElement("div")
    sent_mess.classList.add("sent_message")
    const inner_sent = document.createElement("div")
    inner_sent.classList.add("inner_sent")
    inner_sent.innerText=message
    const user_body = document.createElement("div")
    user_body.classList.add("user_body")
    const img = document.createElement("img")
    img.src="/imgs/user.png"
    user_body.appendChild(img)
    sent_mess.appendChild(inner_sent)
    sent_mess.appendChild(user_body)
    document.querySelector(".chat_body").appendChild(sent_mess)
  }


  const send= ()=>{
    sent_mess_append()

    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/discovery/chat_api/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:"test@email.com",
        message:message
      })
    }).then((res)=> res.json())
    .then((data)=>{
    
      received_mess_append(data.response)
    })
    const chat_body = document.querySelector(".chat_body")
    chat_body.scrollTo(0, chat_body.scrollHeight)
    setmessage("")
    
  }

  const received_mess_append = (e)=>{
    const sent_mess = document.createElement("div")
    sent_mess.classList.add("received_message")
    const inner_sent = document.createElement("div")
    inner_sent.classList.add("inner_received")
    inner_sent.innerText= e
    const user_body = document.createElement("div")
    user_body.classList.add("bot_body")
    const img = document.createElement("img")
    img.src="/imgs/chat_img.png"
    user_body.appendChild(img)
    sent_mess.appendChild(inner_sent)
    sent_mess.appendChild(user_body)
    document.querySelector(".chat_body").appendChild(sent_mess)
    const chat_body = document.querySelector(".chat_body")
    chat_body.scrollTo(0, chat_body.scrollHeight)
  }

  const enter_clicked = (e)=>{
    if (e.keyCode === 13) {
        send()
      }
}
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
    <div className='discovery'>
        <div className='chat'>
          <div className='chat_body'>
{/* 
            <div className='sent_message'>
                <div className='inner_sent'>kasjadsjsdjsjasdsadasdasdsadsadsdasdsd</div>
                <div className='user_body'>
                  <img src="/imgs/user.png" alt="" />
                </div>
            </div>

            <div className='received_message'>
                <div className='inner_received'> welcome</div>
                <div className='bot_body'>
                  <img src="/imgs/chat_img.png" alt="" />
                </div>
            </div> */}
          </div>

            <div className='lower_chat'>
              <div className='market_input' style={{width:"94%"}}>
                  <input style={{fontFamily:"poppins"}} type="text" placeholder='Ask Savanna for insights' value={message} onKeyDown={(e)=>{enter_clicked(e)}} onChange={(e)=>{setmessage(e.target.value)}} />
                  <BsSendFill color='#8C8C8C' size={20} onClick={send}/>
              </div>
            </div>
        </div>

        <div className='check_list'>
          <div className='checklist_upperpart'>
              <div className='checklist_header'>
                <img src="/imgs/checklist.png" alt="" />
                <p className='checklist_text'>Checklist</p>
              </div>
              <hr />
          </div>

            <div className='checklist_lower'>
              <div className='checklist_items'>
                 
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
                          
                  <div className='checklist_item_header'>
                      <div style={{fontFamily: "poppins"}}>Tutorial Video</div>
                      <img  className="tutorial" src="/imgs/tutorial.png" alt="" />
                  </div>
                  
              </div>
              <div className='checklist_items'>
                 
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
                  
                  <div className='checklist_item_header'>
                     <div style={{fontFamily: "poppins"}}>Explain Your Business To Savanna</div>
                     <div style={{fontSize:"12px",color:"#525151",fontWeight:"400",fontFamily: "poppins"}}>Tell her about your idea and answer her questions</div>
                  </div>
                  
              </div>
              
            </div>
            <div className='btn_div'>
             <button className='genrate_btn'>Generate Data</button>
            </div>
           
        </div>
    </div>
  )
}

export default Discovery