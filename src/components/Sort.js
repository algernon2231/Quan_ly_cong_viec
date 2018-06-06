import React, { Component } from 'react';

class Sort extends Component {
    constructor(props){
        super(props);
        this.state = {
            sort: {
                by: 'name',
                value: 1
            }
        }
    }
    onClick = (field,number) => {
        this.props.onSort(field,number);
        this.setState({
            sort: {
                by: field,
                value: number
            }
        })
    
    }
    render() {
        const {sort} = this.state ;
        return ( 
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                        <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup ="true"
                        aria-expanded="true"
                        >
                        Sap Xep <span className="fa fa-caret-square-o-down ml-5"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby ="dropdownMenu1">
                            <li onClick = { () => {this.onClick('name',1)}}>
                                <a role="button" 
                                    className= {(sort.by === 'name' && sort.value === 1)? 'sort_selected' : ''}
                                >
                                    <span className="fa fa-sort-alpha-asc"></span>
                                    Ten A-Z
                                </a>
                            </li>
                            <li onClick = { () => {this.onClick('name',-1)} }>
                                <a role="button" 
                                    className= {(sort.by === 'name' && sort.value === -1)? 'sort_selected' : ''}
                                >
                                    <span className="fa fa-sort-alpha-desc"></span>
                                    Ten Z-A
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li onClick = { () => {this.onClick('status',1)}}>
                                <a role="button"
                                    className= {(sort.by === 'status' && sort.value === 1)? 'sort_selected' : ''}
                                    
                                >
                                Trang Thai Kich Hoat
                                </a>
                            </li>
                            <li onClick = { () => {this.onClick('status',-1)}}>
                                <a role="button"
                                     className= {(sort.by === 'status' && sort.value === -1)? 'sort_selected' : ''}
                                >
                                Trang Thai An
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        );
 }
}
export default Sort;





