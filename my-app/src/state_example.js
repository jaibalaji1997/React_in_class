import React from "react"
class Person extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "Sujan"
            
        }
    }
    render() {
        return (
            <>
            <h1>{this.state.data}</h1>
            </>
            
        )
    }

}
export default Person