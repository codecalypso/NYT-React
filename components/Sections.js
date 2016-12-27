import React from 'react'

let Sections = React.createClass({

  renderSection: function(e){
    this.props.handleClick(e);
  },

  render: function(){
    return(
     <div>
       <ul className="sections">
         <li className="category" onClick={this.renderSection.bind(this, "home")}>Home</li>
         <li className="category" onClick={this.renderSection.bind(this,"opinion")}>Opinion</li>
         <li className="category" onClick={this.renderSection.bind(this,"world")}>World</li>
         <li className="category" onClick={this.renderSection.bind(this,"national")}>National</li>
         <li className="category" onClick={this.renderSection.bind(this, "politics")}>Politics</li>
         <li className="category" onClick={this.renderSection.bind(this,"business")}>Business</li>
         <li className="category" onClick={this.renderSection.bind(this,"technology")}>Technology</li>
         <li className="category" onClick={this.renderSection.bind(this,"books")}>Books</li>
       </ul>
     </div>
    )
  }
})
export default Sections;
