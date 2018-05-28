import React, { Component } from 'react';
class SizeSetting extends Component {
    constructor(props){
        super(props);
        this.incrementFont = this.incrementFont.bind(this);
        this.decrementFont = this.decrementFont.bind(this);
    }
    incrementFont(){
        this.props.incSize() ;
    }
    decrementFont(){
        this.props.decSize();
    }
    render() {
           return (
                <div className="panel panel-warning">
                    <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-success" onClick= {this.incrementFont}>Tang</button>&nbsp;
                        <button type="button" className="btn btn-success" onClick= {this.decrementFont}>Giam</button>
                    </div>
                </div>
      );
  }
}
export default SizeSetting;
