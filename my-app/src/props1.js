import React from "react";
import Furniture from "./props2";
class Electronics extends React.Component{
    constructor(){
        super()
        this.state={
            Mobile:'vivo v23 5g',
            Tv:'thomson',
            Ac:'loyyd',
            Fridge:'Samsung'
        }
    }
    render(){
        return(
            <>
            <h1>Mobile Name : {this.state.Mobile}</h1>
            <Furniture getFridge = {this.state}/>
            </>
        )
    }
}
export default Electronics;