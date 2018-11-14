import React, { Component } from 'react';
// import '../App.css'

export default class ResultCard extends Component{
    render(){
        // let document = require(`../../public/decisions/${this.props.case_number}.txt`)
        let document = require(`../../public/decisions/${this.props.case_number}.txt`)
        
        return(
                <div className="card">
                    <div className="content">
                        <a href={document} download> <div className="header">Case No. {this.props.case_number}</div> </a>
                    </div>
                </div>
        )
    }
}