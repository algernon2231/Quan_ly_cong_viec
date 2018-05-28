import React, { Component } from 'react';
import  './App.css' ;
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting' ;

class App extends Component {
  constructor(props) {
      super(props);
      this.onSetColor = this.onSetColor.bind(this);
      this.incrementFont = this.incrementFont.bind(this);
      this.decrementFont = this.decrementFont.bind(this);
      this.resetStyle = this.resetStyle.bind(this);

      this.state = {
        color: 'red',
        fontSize : 16
      }
  }
  onSetColor(params){
    this.setState({
      color: params
    })
  }
  incrementFont = () => {
    this.setState((prevState)=> {
      if(prevState.fontSize < 32){
        return {
          fontSize: prevState.fontSize + 4 
        }
      }else {
         alert('FontSize khong qua 32px') ;
      }
    })
  }
  decrementFont = () => {
    this.setState((prevState) => {
      if(prevState.fontSize > 8){
        return {
          fontSize: prevState.fontSize  - 4 
        }
      }else{
        alert('FontSize phai lon hon 8px');
      }
    });
  }
  resetStyle(){
    this.setState({
      color: 'red',
      fontSize: 16
    })
  }
    render() {
           return (
             <div className="container mt-60">
               <div className="row">
                 < ColorPicker color = {this.state.color }  onReceiveColor = { this.onSetColor } />
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <SizeSetting
                      fontSize = {this.state.fontSize}
                      incSize = {this.incrementFont }
                      decSize = {this.decrementFont }
                        />  
                  
                    <Reset reset = {this.resetStyle}/>
                 </div>
                 
                 <Result color = {this.state.color} fontSize = {this.state.fontSize} />
               </div>
             </div>
      );
  }
}
export default App;
