import React from 'react'
import './Support.css'
import { BsSendFill } from 'react-icons/bs';
import { useEffect } from 'react';
import { useState } from 'react';
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import TawkTo from '../../components/Tawkto';


function Support () {
// console.log(window.location.pathname);
  //   const [message, setmessage] = useState('')

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_BACKEND_API}/apis/discovery/generate/`,{
  //     method:"post",
  //     headers:{"content-type":"application/json"},
  //     body:JSON.stringify({
  //       email:"test@email.com"
  //     })
  //   }).then((res)=> res.json())
  //   .then((data)=>{

    // useEffect(() => {
    //   Tawk_API
    //   Tawk_API.showWidget;
    //   // console.log(window.Tawk_API);
    // }, []);

  //   })
  
  // }, [])
  
  // const sent_mess_append = ()=>{
  //   const sent_mess = document.createElement("div")
  //   sent_mess.classList.add("sent_message")
  //   const inner_sent = document.createElement("div")
  //   inner_sent.classList.add("inner_sent")
  //   inner_sent.innerText=message
  //   const user_body = document.createElement("div")
  //   user_body.classList.add("user_body")
  //   const img = document.createElement("img")
  //   img.src="/imgs/user.png"
  //   user_body.appendChild(img)
  //   sent_mess.appendChild(inner_sent)
  //   sent_mess.appendChild(user_body)
  //   document.querySelector(".chat_body").appendChild(sent_mess)
  // }


  // const send= ()=>{
  //   sent_mess_append()

  //   fetch(`${import.meta.env.VITE_BACKEND_API}/apis/discovery/chat_api/`,{
  //     method:"post",
  //     headers:{"content-type":"application/json"},
  //     body:JSON.stringify({
  //       email:"test@email.com",
  //       message:message
  //     })
  //   }).then((res)=> res.json())
  //   .then((data)=>{
    
  //     received_mess_append(data.response)
  //   })
  //   const chat_body = document.querySelector(".chat_body")
  //   chat_body.scrollTo(0, chat_body.scrollHeight)
  //   setmessage("")
    
  // }

  // const received_mess_append = (e)=>{
  //   const sent_mess = document.createElement("div")
  //   sent_mess.classList.add("received_message")
  //   const inner_sent = document.createElement("div")
  //   inner_sent.classList.add("inner_received")
  //   inner_sent.innerText= e
  //   const user_body = document.createElement("div")
  //   user_body.classList.add("bot_body")
  //   const img = document.createElement("img")
  //   img.src="/imgs/chat_img.png"
  //   user_body.appendChild(img)
  //   sent_mess.appendChild(inner_sent)
  //   sent_mess.appendChild(user_body)
  //   document.querySelector(".chat_body").appendChild(sent_mess)
  //   const chat_body = document.querySelector(".chat_body")
  //   chat_body.scrollTo(0, chat_body.scrollHeight)
  // }

  // const enter_clicked = (e)=>{
  //   if (e.keyCode === 13) {
  //       send()
  //     }
  //   }

  return (
    <div className='support-container'>
      <h1>SUPPORT</h1>
      {/* <h1>heyy</h1> */}

    {/* <div className='chat'>
      <div className='chat_body'>
      </div>

<div className='lower_chat'>
  <div className='market_input' style={{width:"94%"}}>
      <input type="text" placeholder='Ask Savanna for insights' value={message} onKeyDown={(e)=>{enter_clicked(e)}} onChange={(e)=>{setmessage(e.target.value)}} />
      <BsSendFill color='#8C8C8C' size={20} onClick={send}/>
  </div>
</div>
</div> */}

{/* <div className='check_list'>
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
          <div>Tutorial Video</div>
          <img src="/imgs/tutorial.png" alt="" />
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
         <div>Explain Your Business To Savanna</div>
         <div style={{fontSize:"12px",color:"#525151",fontWeight:"400"}}>Tell her about your idea and answer her questions</div>
      </div>
      
  </div>
  
  </div>
  <div className='btn_div'>
  <button className='genrate_btn'>Generate Data</button>
</div> */}
 {/* <TawkTo/> */}

</div>
// </div>



  )
}

export default Support