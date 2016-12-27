import React from 'react'
import $ from 'jquery'
import Articles from './Articles'
import Header from './Header'
import { Link } from 'react-router'

let Main = React.createClass({

  getInitialState(){
    return{
     articles: [],
     section: "world"
   };
 },
 loadData: function(){
   let  url =  "https://api.nytimes.com/svc/topstories/v2/"  + this.state.section + ".json";
   url += '?' + $.param({
     'api-key': "88630a5a6b03457b8c7f6ab55b75fbbe"
   });
   $.ajax({
     url: url,
     cache: false,
     data: { format: 'json' },
     success: function(data){
       this.setState({articles: this.state.articles.concat(data.results)});
       console.log(data.results);
     }.bind(this),
     error: function() {
       console.log(alert("Houston, we have a problem!"));
 }.bind(this)
   });
 },

 componentWillMount: function(){
   this.loadData();
 },

 handleSwitch: function(e){
  this.setState({articles: [], section: `${e}`}, this.loadData)
},

 render: function () {
   let articles = this.state.articles.map(function(article,i){
     return <Articles key={i} article={article} />
   });
   return(
     <div>
       <Header switchSection={this.handleSwitch} section={this.state.section}/>

       <ul className="articleList">{articles}</ul>
     </div>
   )
 }
});

export default Main;
