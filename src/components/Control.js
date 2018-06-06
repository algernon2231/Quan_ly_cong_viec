import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort' ;
class Control extends Component {
 
    render() {
           return (
             <div className="row">  
                 {/* Search component */}
                 <Search  onSearch = {this.props.onSearch}/>
                 {/* Sort component */}
                 <Sort onSort  = {this.props.onSort} />
            </div>  

     );
 }
}
export default Control;
