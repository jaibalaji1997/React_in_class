import React from "react";
class Table extends React.Component {
    constructor() {
        super()
        this.state = {
            studentName: 'jaibalaji',
            course: 'frontend'
        }
    }
    getData = () => {
        this.setState({ studentName: 'ishabalu', course: 'fullstack' })
    }
    render() {
        return (
            <>
                <table>
                    <tr>
                        <th>Student Name</th>
                        <th>Course</th>
                    </tr>
                    <tr>
                        <td>{this.state.studentName}</td>
                        <td>{this.state.course}</td>
                    </tr>
                </table>
                <button onClick={this.getData}>Click</button>
            </>

        )
    }
}
export default Table;