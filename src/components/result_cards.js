import React, { Component } from 'react';
import ResultCard from './result_card';

export default class ResultCards extends Component{

    render(){
        return(
            <div>
                <h2>ResultCards</h2>
                {this.props.searching}
                <ResultCard/>
            </div>
        )
    }
}