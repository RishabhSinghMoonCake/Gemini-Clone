import './main.css'
import { assets } from '../assets/assets.js';

function Main()
{
  const user = 'Rishabh';

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
        <input type="text" placeholder='Ask Gemini' />
        <div className='bottom-bar'>
          <div className='left-filler'>
            <img src={assets.plus_icon} alt="" />
            <p>Deep Research</p>
            <p>Canvas</p>
          </div>
          <div className='mic-place'>
            <img src={assets.mic_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;