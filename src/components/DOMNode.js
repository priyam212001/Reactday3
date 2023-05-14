import React,{Component } from 'react';
import  ReactDOM  from 'react-dom';

class DOMNode extends Component{
    constructor(){
        super();
        this.findDomNodeHandler1=this.findDomNodeHandler1.bind(this);
        this.findDomNodeHandler2=this.findDomNodeHandler2.bind(this);
    }
    findDomNodeHandler1(){
        var myDiv1=document.getElementById("myDivOne").style.color="red";
        ReactDOM.findDomNodeHandler1(myDiv1);
    }
    findDomNodeHandler2(){
        var myDiv2=document.getElementById("myDivTwo").style.color="blue";
        ReactDOM.findDomNodeHandler2(myDiv2);
    }

    render(){
        return(
            <div>
                <h1>ReactJs find DOM Node Example</h1>
                <button onClick={this.findDomNodeHandler1}>FIND_DOM_NODE1</button>
                <button onClick={this.findDomNodeHandler2}>FIND_DOM_NODE2</button>
                <h3 id="myDivOne">NODE1</h3>
                <h3 id="myDivTwo">NODE2</h3>
            </div>
        );
    }
}
export default DOMNode;