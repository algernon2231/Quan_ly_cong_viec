import React, { Component } from 'react';
import TaskItem from './TaskItem' ;
class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1 // all : -1, active : 1, deactive : 0
        }
    }
    onChange = (e) => {
        const target = e.target ;
        const name = target.name;
        const value = target.value ;
        this.props.onFilter(
             name === 'filterName' ? value  : this.state.filterName,
             name === 'filterStatus' ? value :  this.state.filterStatus 
        )
        this.setState({
            [name]: value 
        })
    }

    render() {
            const { tasks} = this.props ;
            const { filterName, filterStatus } = this.state ;
            const elmTasks = tasks.map((task,index) => {
                    return <TaskItem 
                                    task = {task} 
                                    key={task.id}
                                    index= {index}
                                    name = {task.name}
                                    onChangeStatus = {this.props.onChangeStatus}
                                    onDelItemList = {this.props.onDelItemApp}
                                    onUpdate = {this.props.onUpdate}
                                        />
            })
           return ( 
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Ten</th>
                        <th className="text-center">Trang Thai</th>
                        <th className="text-center">Hanh Dong</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                        <input 
                            type="text"
                            className="form-control"
                            name="filterName"
                            value = {filterName}
                            onChange = {this.onChange }
                        />
                        </td>
                        <td>
                        <select className="form-control" 
                            name="filterStatus"
                            value = {filterStatus}
                            onChange = {this.onChange}
                        >
                            <option value = {-1}>Tat Ca</option>
                            <option value = {0}>An</option>
                            <option value = {1}>Kich Hoat</option>
                        </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTasks}
                </tbody>
        </table>                    
     );
 }
}
export default TaskList;






