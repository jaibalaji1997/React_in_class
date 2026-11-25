import React from "react";
class ArrayMap extends React.Component{
    constructor(){
        super()
        this.state = ['apple','orange','banana','mango']
    }
    render(){  
        return(
            <>
            {this.state.map(fruits => (
                <h1>{fruits}</h1>
            ))}
            </>
        )
    }
}
export default ArrayMap;