import './main.css'
import { assets } from '../assets/assets.js';
import React, { useContext, useState } from 'react';
import Gemini from '../config/gemini.js';
import { Context } from '../contextProvider/context.jsx';

function Main()
{
  const user = 'Rishabh';

  const {onSent, recentPrompt, showResult, loading,resultData, setInput,input} = useContext(Context);

  function handleInputContent(value)
  {
    setInput(i => value);
  }

  function handleSendButtonClick()
  {
    if(input) onSent();
  }

  return(
    <div className='main'>
      <div className='nav'>
        <h2>Gemini</h2>
        <img src={assets.gemini_icon} alt="" />
      </div>
      <div className='middle-hello'>
        <p>Hello, {user}</p>
      </div>
      <div className='input-section'>
        <input className='input-content'  onChange={(e)=>handleInputContent(e.target.value)} value={input} type="text" placeholder='Ask Gemini' />
        <div className='bottom-bar'>
          <div className='left-filler'>
            <img src={assets.plus_icon} alt="" />
            <p>Deep Research</p>
            <p>Canvas</p>
          </div>
          <div className='mic-place'>
            <img onClick={handleSendButtonClick} src={input!==''?assets.send_icon:assets.mic_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;