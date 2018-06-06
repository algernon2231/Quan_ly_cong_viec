import React, { Component } from 'react';

class TaskItem extends Component {
    onChangeStatus = (id) => {
        this.props.onChangeStatus(id);
    }
    onDelItem = (name)=> {
        this.props.onDelItemList(name);
    }
    onUpdate = () => {
        this.props.onUpdate(this.props.task.id, this.props.name);
    }
    render() {
           return ( 
            <tr>
                <td className="text-center">{this.props.index + 1}</td>
                <td className="text-center">{this.props.task.name}</td>
                <td className="text-center"  onClick = { () => { this.onChangeStatus(this.props.task.id) }} >
                   
            {this.props.task.status ? (<span className="label label-danger">Kich Hoat</span>) :(<span className="label label-info">An</span>) }
                </td>
                <td>
                    <button type="button" 
                        className="btn btn-warning"
                        onClick =  {this.onUpdate}
                        >
                        <span className="fa fa-pencil"></span> Sua
                    </button>&nbsp;
                    <button type="button" 
                        className="btn btn-danger" 
                        onClick = { () => { this.onDelItem(this.props.name)} }>
                        <span className="fa fa-trash"></span> Xoa
                    </button>
                </td>
        </tr>                   
     );
 }
}
export default TaskItem;






