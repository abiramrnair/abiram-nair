import React from 'react'
import './toggleswitch.css'
import moonicon from '../../assets/moon.png'
import sunicon from '../../assets/sun.png'

function ToggleSwitch(props) {    
    return (
        <label className={`switch${props.nightmode ? " nightmode":""}`}>
            <input type="checkbox" onClick={props.toggle}></input>
            <span className="slider"><img src={sunicon} alt="" className="slider-icon"></img><img src={moonicon} alt="" className="slider-icon"></img></span>
        </label>
    )
}

export default ToggleSwitch
