import React from "react";

class SetState extends React.Component{
   constructor(props){
    super(props);
    this.state={msg:"Welcome to Hexaware"};
    this.updateSetState=this.updateSetState.bind(this);
   }

   updateSetState(){
    this.setState({
        msg:"Its a best React jS Session"
    });
   }

   render(){
    return(
         <div>
            <h1>{this.state.msg}</h1>
            <button onClick={this.updateSetState}>SETSTATE</button>
         </div>
    );
   }

}
export default SetState;