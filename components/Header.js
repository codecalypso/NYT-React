import React from 'react'
import Time from 'react-time'
import Moment from 'moment'
import Sections from './Sections'

let Header = React.createClass({

  getInitialState(){
    return {sections: false};
  },
  renderSections: function(){
    this.setState({sections: !this.state.sections});
  },
  displaySection: function(e){
    this.props.switchSection(e);
  },
  removeContainer: function(){
      this.setState({sections: false});
  },
  render: function(){
    let now = new Date()
    return(
     <div className="boofa">
       <button className="sectionsButton" onClick={this.renderSections} >SECTIONS</button>
       { this.state.sections ? <Sections handleClick={this.displaySection}/> : null }
       <h1 className="headline">New York Times</h1>

      <p className="info"> Today is <Time value={now} format="MM/DD/YYYY" />  | You are viewing the {this.props.section} section</p>
    </div>
    )
  }
})
export default Header;
