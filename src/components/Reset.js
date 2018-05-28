import React, { Component } from 'react';

class Reset extends Component {
    constructor(props){
        super(props);
        this.resetStyle = this.resetStyle.bind(this) ;
    }
    resetStyle(){
        this.props.reset() ;
    }
    render() {
           return (
            <button type="button" className="btn btn-primary" onClick = {this.resetStyle}>Reset</button>
      );
  }
}
export default Reset;
