import React from 'react'
import Time from 'react-time'
import Moment from 'moment'

let Header = React.createClass({

  render: function(){
    let now = new Date()
    let container = <div id="containar">
                      <ul className="column">
                        <li>World</li>
                        <li>Politics</li>
                      </ul>
                    </div>
    return(
     <div>
     <p className="date">Today is <Time value={now} format="MM/DD/YYYY" /></p>
     <button className="sections">SECTIONS</button>
     {container}
    <h1>New York Times - Top Articles</h1>

     </div>
    )
  }
})
export default Header;
