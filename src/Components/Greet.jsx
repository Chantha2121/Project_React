import React from "react"
const Greet = (props) => {
    const {name,heroName,children} = props;
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Hello bro {name} Nick name {heroName}</h1>
            <p>{children}</p>
        </div>
    );
}
export default Greet;