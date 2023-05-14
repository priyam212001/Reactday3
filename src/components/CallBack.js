import React,{Component} from 'react';

class CallBack extends Component{

    constructor(props){
        super(props);
        this.callRefInput=null;
        this.setInputRef=element => {
             this.callRefInput=element;
        };
        this.focusRefInput = () => {
            if(this.callRefInput)this.callRefInput.focus();
        };
    }
        
    
    render(){
        return(
                 <div>
                    <h1>CALLBACK REGS EXAMPLE</h1>
                    <input type="text" ref={this.setInputRef}/>
                    <input type="button" value="FOCUS INPUT TEXT"
                    onClick={this.focusRefInput}/>
                 </div>
        );
    }
}
export default CallBack;