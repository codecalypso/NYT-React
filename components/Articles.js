import React from 'react'

let Articles = React.createClass({

  render: function(){
    let article = this.props.article;
    return(
     <div>
       <li className="title">
         {article.title}
       </li>
     </div>
    )
  }
})
export default Articles;
