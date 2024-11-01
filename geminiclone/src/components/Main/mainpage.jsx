import React, { useContext } from 'react'
import { assets } from '../../assets/assets';
import './mainpage.css';
import { Context } from '../../context/context';
const Mainpage = () => {

  const { prevPrompts,setPrevPrompts,onSent,recentPrompt,setRecentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context);

  return (
    <div className="main">
       <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
       </div>
       <div  className="main-container">

        {!showResult ? 
        <>
        <div className="greet">
              <p><span>Hello , Dev</span></p>
              <p>How can i help you Today?</p>
          </div>
       <div className="cards">
          <div className="card">
              <p>Suggest beautiful palces to see on an  upcoming rad trip</p>
              <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
              <p>Briefly summarize  this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
              <p>Suggest beautiful palces to see on an  upcoming rad trip</p>
              <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
              <p>Suggest beautiful palces to see on an  upcoming rad trip</p>
              <img src={assets.code_icon} alt="" />
          </div>
       </div>
        </>  
         :
         <div className="result">
            <div className='result-title'>
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
                <img src={assets.gemini_icon} alt="" />
                {loading ? <div className="loader">
                                <hr />
                                <hr />
                                <hr />

                            </div>
                            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            </div>
        </div>
        }

          {/* <div className="greet">
              <p><span>Hello , Dev</span></p>
              <p>How can i help you Today?</p>
          </div>
       <div className="cards">
          <div className="card">
              <p>Suggest beautiful palces to see on an  upcoming rad trip</p>
              <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
              <p>Briefly summarize  this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
              <p>Suggest beautiful palces to see on an  upcoming rad trip</p>
              <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
              <p>Suggest beautiful palces to see on an  upcoming rad trip</p>
              <img src={assets.code_icon} alt="" />
          </div>
       </div> */}
       <div className="main-bottom">
           <div className="search-box">
              <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter your Prompt" />
              <div>
                 <img src={assets.gallery_icon} alt="" />
                 <img src={assets.mic_icon} alt="" />
                 <img src={assets.send_icon} onClick={() =>onSent()} alt="" />
              </div>
           </div>
           <p className="bottom-info">
               ajgdbsdjkbshk;dnbsrdlknghbdgahrsnfbdhndfbdhrjdgmnfxhjtmdgcnfshsrmdgfnsmdg
            </p>
       </div>
      </div>
    </div>
  )
}

export default Mainpage;