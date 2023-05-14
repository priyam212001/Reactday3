import React,{ Component} from 'react';

class CreateRef extends Component{
   constructor(props){
    super(props);
    this.callRef=React.createRef();
    this.addingRefInput=this.addingRefInput.bind(this);
   }

   addingRefInput(){
    this.callRef.current.focus();
   }
    render(){
        return(
            <div>
                <h2>Adding Ref to DOM Element</h2>
                <input type="text" ref={this.callRef}/>
                <input type="button" value="ADD TEXT INPUT" onClick={this.addingRefInput}/>
            </div>
        );
    }
}
export default CreateRef;