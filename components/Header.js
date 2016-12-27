import React from 'react'
import Time from 'react-time'
import Moment from 'moment'
import Sections from './Sections'

const Header = (props) => {

  function displaySection(e){
    props.switchSection(e);
  }

  function renderContainer(){
    props.renderSectionBox()
  }

  return(
   <div className="header">
     <button className="sectionsButton" onClick={renderContainer} >SECTIONS</button>
     {props.box ? <Sections handleClick={displaySection} /> : null}
     <h1 className="headline">New York Times</h1>
     <p className="info"> Today is <Time value={new Date} format="MM/DD/YYYY" /> | You are viewing the {props.section} section</p>
   </div>
  )
}
export default Header;
