import './sidebar.css'
import React,{useContext, useState} from 'react';
import { assets } from '../assets/assets.js';
import { Context } from '../contextProvider/context';
export default function Sidebar()
{
  

  const [extended,setExtended] = useState(false);
  const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context);

  const loadPrompt = async (prompt) =>{
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  function handleMenuExpansion()
  {
    setExtended(e=>!extended);
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <img onClick={handleMenuExpansion} className='menu' src={assets.menu_icon} alt="" />
        <div onClick={()=>{newChat()}} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended&&<p>New Chat</p>}
        </div>
        {extended && <div className='recent'>
          <p className="recent-title">Recent</p>
          {prevPrompts.map((item,index)=>{
            return (
            
            <div onClick={()=>loadPrompt(item)} className='recent-entry'>
              <img src={assets.message_icon} alt="" />
              {<p>{item.slice(0,18)}...</p>}
            </div>
            );
          })}
          
        </div>}
        
      </div>
      <div className='bottom'>
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended && <p>Help</p>}

        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended && <p>Activity</p>}

        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended && <p>Settings</p>}

        </div>
      </div>
    </div>
  );
}
