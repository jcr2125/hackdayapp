import React, { Component } from 'react';
import ResultCards from './result_cards';

export default class SearchCard extends Component{
    constructor(props) {
        super(props)
        this.state = {
          searching: "",
          display: false
        }
      }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            searching: e.target.value
        })

        if(this.state.searching.trim() === ""){
            this.setState({
                display: false
            })
        }
        else{
            this.setState({
                display: true
            })
        }
        console.log("state");
        
        console.log(this.state);
    }

    render(){
        return (
            <div>
                <div>
                    <h1>Search Card</h1>
                    <label>
                        What would you like to Search for?
                    </label>
                    <input type="text" name="searching" value={this.state.searching} onChange={this.handleChange}/>
                    <input type="submit" name="Submit"/>
                </div>
                {/* <ResultCards searching={this.state.searching}/> */}
            </div>
        )
    }
}