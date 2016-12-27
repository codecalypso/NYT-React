import React from 'react'

const Sections = (props) => {

  function renderSection(e){
    props.handleClick(e)
  }

  return(
   <div>
     <ul className="sections">
       <li className="category" onClick={renderSection.bind(this, "home")}>Home</li>
       <li className="category" onClick={renderSection.bind(this, "opinion")}>Opinion</li>
       <li className="category" onClick={renderSection.bind(this, "world")}>World</li>
       <li className="category" onClick={renderSection.bind(this, "national")}>National</li>
       <li className="category" onClick={renderSection.bind(this, "politics")}>Politics</li>
       <li className="category" onClick={renderSection.bind(this, "business")}>Business</li>
       <li className="category" onClick={renderSection.bind(this, "technology")}>Technology</li>
       <li className="category" onClick={renderSection.bind(this, "books")}>Books</li>
     </ul>
   </div>
  )

}
export default Sections;
