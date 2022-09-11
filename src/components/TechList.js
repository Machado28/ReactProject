import React, { Component } from 'react';
import TechItem from './TechItem';
class TechList extends Component {
  state={
    newTech:'',
    techs:[
      'NodeJs',
      'ReactJs',
      'React Native',
      'others'
    ]
  }
  handleInputChange=e=>{
 

this.setState({ newTech:e.target.value})
  } 

  handleSubmit= e =>{
    e.preventDefault()
   this.setState({techs:[...this.state.techs,this.state.newTech]})
   this.setState({newTech:''})
  }
  handleDelete=(tech)=>{
 this.setState({techs:this.state.techs.filter(t=> t!==tech)})
  }
render(){
 
return(
 <form onSubmit={this.handleSubmit}>
 <h1>{this.state.newTech}</h1>
  <ul>
    {
     this.state.techs.map(tech=>
      <TechItem tech={tech} onDelete={()=>this.handleDelete(tech)}></TechItem>)
    }   
</ul> 
<input 
 type='text' 
 onChange={this.handleInputChange} 
 value={this.state.newTech}></input>
<button type='submit'>Enviar</button>
</form>
)
}
}
React
export default TechList;