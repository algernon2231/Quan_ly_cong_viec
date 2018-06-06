import React, { Component } from 'react';
class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name :'',
      status: false
    }
  }
  componentWillMount(){
      if(this.props.task){
         this.setState({
           id: this.props.task.id,
           name: this.props.task.name,
           status: this.props.task.status
         })
      }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.task){
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      })
   } else if(!nextProps.task){
       this.setState({
         id: '',
         name: '',
         status: false
       })
   }
  }
  onChange = (e) => {
    const target = e.target ; 
    const name = target.name;
    let  value = target.value ;
    if(name === 'status'){
      value = target.value === 'true' ? true : false  ;
    }
    this.setState({
      [name] : value 
    })
  }
    onSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state) ;
      this.onReset();
      this.onCloseForm();
    }
    onCloseForm = ()=> {
      this.props.onCloseForm();
    }
    onReset = () => {
      this.setState({
        name : '',
        status: false
      })
    }
    render() {
           return (
            <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title"> { this.state.id !== '' ? 'Cap Nhat Cong Viec' : 'Them Cong Viec'}
                <i className="fa fa-times-circle text-right"
                  onClick= {this.onCloseForm}
                 ></i>
              </h3>
            </div>
            <div className="panel-body">
               <form onSubmit = {this.onSubmit}>               
                 <div className="form-group">
                   <label >Ten :</label>
                   <input type="text" 
                      className="form-control"
                      name ="name"
                      value = {this.state.name}
                      onChange= {this.onChange}
                      />
                 </div>
                 <div className="form-group">
                   <label >Trang Thai :</label>
                  
                  <select name="status" 
                      className="form-control" 
                      value = {this.state.status}
                      onChange = {this.onChange}
                  >
                    <option value={true}>Kich Hoat</option>
                    <option value={false}>An</option>
                  </select>
                  
                 </div>
                <div className="text-center">
                  
                  <button type="submit" className="btn btn-warning">
                    <span className="fa fa-plus mr-5"></span>Luu Lai
                  </button>&nbsp;
                  <button type="button" className="btn btn-danger"onClick = {this.onReset} >
                    <span className="fa fa-close mr-5"></span>Huy Bo
                  </button>
                  
                </div>
               
                
               </form>
               
            </div>
        </div>
                    
                 );
  }
}
export default TaskForm;
