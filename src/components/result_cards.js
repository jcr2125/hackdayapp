import React, { Component } from 'react';
import ResultCard from './result_card';

export default class ResultCards extends Component{

    generateCards = (cards) => {
        return cards.map((card)=> {
            return <ResultCard case_number={ card['ref'] } />
        })
    }
    
    render(){
        return(
            <div className="ui cards top-padding">
                {this.generateCards(this.props.case_numbers)}  
            </div>
        )
    }
}