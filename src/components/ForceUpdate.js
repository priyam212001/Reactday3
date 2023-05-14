import React,{ Component } from 'react';

class ForceUpdate extends Component{
constructor(props){
    super(props);
   this.forUpdateState=this.forUpdateState.bind(this);
}
forUpdateState(){
    this.forceUpdate();
}
render(){
    return(
        <div>
            <h1>EXample to generate random number</h1>
            <h3>Random number: {Math.random()}</h3>
            <button onClick={this.forUpdateState}>Please click</button>
        </div>
    );
}

}
export default ForceUpdate;