import React from "react";
class StudentDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'muneeswaran',
            class:'React class',
            batch:2026
        }
    }
    render(){
        return(
            <table>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Batch</th>
                </tr>
                <tr>
                    <td>{this.state.name}</td>
                    <td>{this.state.class}</td>
                    <td>{this.state.batch}</td>
                </tr>
            </table>
        )
    }
}
export default StudentDetail;