import React, {Component} from 'react';

class Inline extends Component{
    
    render(){
        const mystyle={
            color:"black",
            backgroundColor:"lightblue",
            padding:"10x",
            fontFamilt:"Arial"
        }
        return(
            <div>
                <h1 style={{color:"Green"}}>WELCOME TO REACTJS</h1>
                <p style={{backgroundColor: "lightgreen"}}>here,you can find all css working</p>
                <p style={mystyle}>WE ARE WORKING WITH CSS STYLING</p>
            </div>
        );
    }


}
export default Inline;