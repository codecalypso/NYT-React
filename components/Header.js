import React from 'react'
import Time from 'react-time'
import Moment from 'moment'
import Sections from './Sections'

let Header = React.createClass({

  getInitialState(){
    return {sections: false};
  },
  renderSections: function(){
    this.setState({sections: true});
  },
  displaySection: function(e){
    this.props.switchSection(e);
  },
  render: function(){
    let now = new Date()
    return(
     <div>
       <p className="date">Today is <Time value={now} format="MM/DD/YYYY" /></p>
       <button className="sectionsButton" onClick={this.renderSections}>SECTIONS</button>
       { this.state.sections ? <Sections handleClick={this.displaySection}/> : null }
       <h1>New York Times - Top Articles</h1>
    </div>
    )
  }
})
export default Header;
