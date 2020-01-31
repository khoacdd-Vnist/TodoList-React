import React, { Component } from 'react';
import TodoList from './TodoList';

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: ['Học HTML', 'Học CSS','Học JavaScripts','Học ReactJs','Học NodeJS'],
        }
    }
    render() {
        return (
            <div className="container">
                <br />
                <br />
                <h1>List Task</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name of task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map(function (name, index) {
                                return <
                                    TodoList name={name}
                                />
                            }.bind(this))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskList;