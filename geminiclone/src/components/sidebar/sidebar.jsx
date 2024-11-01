import React, { useContext } from 'react'
import './sidebar.css'
import  {assets} from '../../assets/assets';
import { useState } from 'react';
import { Context } from '../../context/context';


const Sidebar = () => {
    const [extended,setExtend] = useState(false);
    const {onSent,prevPrompts,setRecentPrompt} = useContext(Context)
  
  return (
    <div className="sidebar">
        <div className="top">
            <img onClick={() =>setExtend(prev=>!prev)} src={assets.menu_icon} className="menu" alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon}   alt="" />
                {extended ? <p>New Chat</p> : null}
            </div>
           {extended ?  
            <div className="recent">
                <p className="recent-title">Recent </p>
                {prevPrompts.map((item,index) =>{
                    return(
                        <div className="recent-entry">
                            <img src={assets.menu_icon} alt="" />
                            {extended ? <p>{item}....</p> : null}
                         </div>
                    )
                })}
               
            </div> : null}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended ? <p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended ? <p>History</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended ? <p>Setting</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar;