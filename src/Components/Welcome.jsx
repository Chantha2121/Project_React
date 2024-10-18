import React,{Component} from "react";
class Welcome extends Component {
    render(){
        const {name, heroName} = this.props;
        return (
            <div>
                <h1 style={{textAlign:'center'}}>Hello class {name} and nick name {heroName}</h1>
            </div>
        );
    }
}
export default Welcome;