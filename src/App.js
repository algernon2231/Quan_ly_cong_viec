import React, { Component } from 'react';
import TaskForm from './components/TaksForm' ;
import Control from './components/Control';
import TaskList from './components/TaskList';
import './App.css' ;
import { findIndex } from 'lodash' ;

class App extends Component {
    constructor(props){
      super(props);
      this.state  = {
        tasks: [],
        isDisplayForm : false,
        taskEditing: null,
        filter: {
          name: '',
          status : -1
        },
        keyword: '',
        sort : {
          by: 'name',
          value : 1
        }
      }
    }
    componentWillMount(){
      if(localStorage && localStorage.getItem('tasks')){
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        this.setState({
          tasks: tasks 
        })
      }
    }
    generateData = () => {
      const tasks = [
        {id:this.generateID() , name: 'Angular 4', status : true},
        {id:this.generateID() , name: 'React JS ', status : true},
        {id:this.generateID() , name: 'Vue JS', status : false},

      ];
      this.setState({
        tasks: tasks
      });

      localStorage.setItem('tasks',JSON.stringify(tasks));;
    }
    s4(){
      return Math.floor((1+ Math.random()) *0x10000).toString(16).substring(1);
    }
    generateID(){
      return this.s4() + this.s4() + '-' + this.s4()+ '-' + this.s4() +'-' + this.s4() + '-' + this.s4();
    }
    onAddThemCongViec = () => {
         if(this.state.isDisplayForm && this.state.taskEditing !== null ){
           this.setState({
             isDisplayForm: true,
             taskEditing: null
           })
         }else {
           this.setState(prevState =>({
              isDisplayForm:! prevState.isDisplayForm,
              taskEditing: null
           })) ;
         }
    }
    onCloseForm = () => {
      this.setState({
        isDisplayForm: false
      })
    }
    onShowForm = () => {
      this.setState({
        isDisplayForm: true
      })
    }
    onSubmit = (data) => {  
      let {tasks} = this.state;
      if(data.id===""){
        data.id = this.generateID() ;
        let newTasks = tasks.concat(data);
        this.setState({
          tasks : newTasks
        })
        localStorage.setItem('tasks',JSON.stringify(newTasks));
      }else {
      // let i = this.findIndex(data.id) ;
      let i = findIndex(tasks, (task)=> {
        return task.id === data.id;
      })
       tasks[i] = data;
       this.setState({
         tasks: tasks 
       });
       localStorage.setItem('tasks',JSON.stringify(tasks));
      }
    }
   
    
   onChangeStatus = (id) =>{
     let {tasks} = this.state;
        tasks.filter((task,index) => {
          if(task.id === id){
            return task.status = !task.status;
          }
          this.setState({
            tasks : tasks 
          })
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
   }
   onUpdate = (id, name) => {
      let {tasks} = this.state ;
      let index = findIndex(tasks,(task)=>{
        return task.name === name ;
       });
      let taskEditing = tasks[index] ;
      this.setState({
        taskEditing : taskEditing 
      })
     //  console.log(taskEditing);
     
      this.onShowForm();
   }
   delItem = (name) => {
      let  {tasks} = this.state ;
      let index = findIndex(tasks,(task)=>{
          return task.name === name ;
      });
      tasks.splice(index,1);
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks',JSON.stringify(tasks));
      this.onCloseForm();
   }  
   onFilter = (filterName, filterStatus)  => {
    // console.log(filterName,filterStatus);
      filterStatus = parseInt(filterStatus,10);
      this.setState({
        filter: {
          name: filterName.toLowerCase(),
          status: filterStatus
        }
      })

   }
   onSearch = (keyword) => {
    this.setState({
      keyword: keyword.toLowerCase()
    })
  }

  onSort = (field,number) => {
     this.setState({
        sort: {
          by: field,
          value: number 
        }
     })
  }
    render() {
          const { isDisplayForm, taskEditing, filter, keyword , sort} = this.state ;
          let {tasks} = this.state; 
         //console.log(filter);
        if(filter) {
            if(filter.name){
              tasks =  tasks.filter((task) =>{
                  return task.name.toLowerCase().indexOf(filter.name) !== -1;
              })
            }
           tasks = tasks.filter((task) => {
              if(filter.status === -1 ){
                return tasks;
              }else {
                  return task.status === (filter.status === 1? true : false)
              }
           })
        }
      if(keyword !== '') {
        tasks =  tasks.filter((task) => {
              return task.name.toLowerCase().indexOf(keyword) !== -1;
         }) 
      }
      if(sort.by ==='name'){
        tasks.sort((a,b) => {
          if(a.name > b.name) return sort.value;
          else  if(a.name < b.name) return -sort.value;
          else return 0 ;
        })
      }else {
        tasks = tasks.filter( (task)=>{
            if(sort.value === 1){
               return task.status?  true: false
            }else {
              return task.status? false : true
            }
        })
      }
                 const elmTaskForm = isDisplayForm ? 
              <TaskForm onCloseForm  = {this.onCloseForm} 
                        onSubmit = {this.onSubmit}
                        task ={taskEditing}
              /> : ''  ;

           return (
                    
                    <div className="container">
                        <div className="text-center">
                            <h1>Quan Ly Cong Viec</h1>
                          </div>
                          <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                              {elmTaskForm}
                            </div>
                            <div className= {isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8': 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                              <button type="button"
                                   className="btn btn-primary"
                                   onClick = {this.onAddThemCongViec}
                                   >
                                <i className="fa fa-plus"></i> Them Cong Viec
                              </button>&nbsp;
                              <button type="button"
                                 className="btn btn-primary"
                                 onClick = {this.generateData}
                                 >
                                <i className="fa fa-plus"></i> Generate Data
                              </button>
                              <br/>
                              <br/>
                                 <Control
                                     onSearch = {this.onSearch}
                                     onSort = {this.onSort}
                                     /> 
                                <br/>
                                {/*List*/}
                                <div className="row mt-15">
                                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                      <TaskList
                                           tasks = {tasks}
                                           onChangeStatus = {this.onChangeStatus}
                                           onDelItemApp = {this.delItem}
                                           onUpdate = {this.onUpdate}
                                           onFilter = {this.onFilter}

                                       />
                                  </div>  
                                </div>
                            </div>
                          </div>
                    </div>
                 );
  }
}
export default App;
