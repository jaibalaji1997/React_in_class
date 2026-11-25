import React from "react";
class MultiObj extends React.Component {
    constructor() {
        super()
        this.state =
            [{ name: 'jaibalaji', course: 'fullstack' },
            { name: 'janani', course: 'backend' },
            { name: 'vimalan', course: 'frontend' }
            ]
    }
    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.map((user) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.course}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}
export default MultiObj;