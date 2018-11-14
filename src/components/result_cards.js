import React, { Component } from 'react';
import ResultCard from './result_card';
import { Card } from 'semantic-ui-react';


export default class ResultCards extends Component{

    generateCards = (cards) => {
        return cards.map((card)=> {
            return <ResultCard case_number={ card['ref'] } />
        })
    }
    
    render(){
        return(
            <div>
                <h2>ResultCards</h2>
                <Card.Group centered> 
                    {this.generateCards(this.props.case_numbers)}
                </Card.Group>
                
            </div>
        )
    }
}