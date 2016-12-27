import React from 'react'
import $ from 'jquery'
import Articles from './Articles'
import Header from './Header'
import { Link } from 'react-router'

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      section: "home",
      box: false
    }
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleRender = this.handleRender.bind(this)
  }

  handleRender(){
    this.setState({box: !this.state.box});
  }

  loadData(){
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
  }

  componentWillMount(){
   this.loadData();
  }

  handleSwitch(e){
    this.setState({articles: [], section: `${e}`}, this.loadData)
  }

  render() {
    let articles = this.state.articles.map(function(article,i){
     return <Articles key={i} article={article} />
    });
    return(
     <div>
       <Header
        switchSection={this.handleSwitch}
        section={this.state.section}
        renderSectionBox={this.handleRender}
        box={this.state.box}/>
       <ul className="articleList">{articles}</ul>
     </div>
    )
  }
};

export default Main;
