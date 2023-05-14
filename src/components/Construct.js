import React, { Component } from 'react';

class Construct extends Component{
  constructor(props){
    super(props);
    this.state={data: "www.react.org"}
    this.handleEvent=this.handleEvent.bind(this);
  }
  handleEvent(){
    console.log(this.props);
    console.log(this.state.data);
  }
  
    render(){
    return(
    <div>
        <h2>React Constructor Example</h2>
        <input type="text" value={this.state.data}/><br></br>
        <button onClick={this.handleEvent}>Please Click</button>

    </div>
    );
   }

}
export default Construct;