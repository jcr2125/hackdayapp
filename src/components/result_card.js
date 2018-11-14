import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

export default class ResultCard extends Component{
    render(){
        return(
                <div>
                    <Card>
                        <h4>{this.props.case_number}</h4>
                    </Card>
                </div>
        )
    }
}