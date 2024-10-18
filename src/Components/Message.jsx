import React,{Component} from "react";
class Message extends Component {
    constructor(){
        super();
        this.state = {
            message:'Welcome the chantha coding'
        };
    }
    changeText(){
        this.setState({
            message:'Fuck you '
        });
    }
    render(){
        return (
            <div>
            <h1 style={{textAlign:'center'}}>{this.state.message}</h1>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
                <button onClick={()=> this.changeText()}>subscribe</button>
            </div>
            </div>
        );
    }
}
export default Message;