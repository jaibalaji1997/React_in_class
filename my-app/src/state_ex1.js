import React from "react";
class StudentDe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'jaibalaji',
            class: '12th',
            school: 'hindu higher secondary school'
        }
    }
    
    render() {
        return (
            <>
                <ul>
                    <li>Name : {this.state.name}</li>
                    <li>Class : {this.state.class}</li>
                    <li>School : {this.state.school}</li>

                </ul>
            </>
        )
    }
}
export default StudentDe;