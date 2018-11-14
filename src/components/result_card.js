import React, { Component } from 'react';
// import '../App.css'

export default class ResultCard extends Component{
    render(){
        return(
                <div className="card">
                    <div className="content">
                        <div className="header">Case No. {this.props.case_number}</div>
                    </div>
                </div>
        )
    }
}