import React from "react";
class Project extends React.Component {
    constructor()
     {
        super()
        this.state = {
            proName: 'React',
            usedFor: 'JavaScript'
        }
    }
    stateData = () => {
        this.setState({
            proName: 'React Project',
            usedFor: 'Frontend'
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.proName}</h1>
                <h1>{this.state.usedFor}</h1>
                <button onClick={this.stateData}>Click to change</button>
            </>
        )
    }
}
export default Project;