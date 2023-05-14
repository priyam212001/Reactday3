import React,{Component} from 'react';
import styles from './myStyle.module.css';

class Module extends Component{
    
    render(){
        return(
           <div>
            <h1 className={styles.mystyle}>REACT JS WORKING</h1>
           <p className={styles.parastyle}>HELLO PARASTYLE</p>
           </div>
        );
    }
}
export default Module;