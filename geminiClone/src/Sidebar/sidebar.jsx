import './sidebar.css'
import React,{useState} from 'react';
import { assets } from '../assets/assets.js';
export default function Sidebar()
{

  const [extended,setExtended] = useState(false);

  function handleMenuExpansion()
  {
    setExtended(e=>!extended);
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <img onClick={handleMenuExpansion} className='menu' src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended&&<p>New Chat</p>}
        </div>
        <div className='recent'>
          {extended&&<p className="recent-title">Recent</p>}
          <div className='recent-entry'>
            {extended&&<img src={assets.message_icon} alt="" />}
            {extended && <p>What is react...</p>}
          </div>
        </div>
        
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
