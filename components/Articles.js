import React from 'react'

const Articles = (props) => {

  return(
   <div>
     <li className="title">
       {props.article.title}
     </li>
   </div>
  )
}

export default Articles;
