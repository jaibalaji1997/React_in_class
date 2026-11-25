import React from "react";
import Click2 from "./Onclick_2";
class Click1 extends React.Component{
    constructor(){
        super()
        this.state = {'Data':true}
    }
    stateData = ()=>{
        this.setState({
            Data:false
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.Data}</h1>
            <button onClick={this.stateData}>Click</button>
            <Click2 data={this.state.Data} />
            </>
        )
    }
}
export default Click1;