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
        this.setState({
            searching: e.target.value
        })

        // console.log("state");
        // console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault()
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
        // console.log("submit");
        // console.log(e.target.searching.value);
    }

    render(){
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Search Card</h1>
                        <label>
                            What would you like to Search for?
                        </label>
                        <input type="text" name="searching" value={this.state.searching} onChange={this.handleChange}/>
                        <input type="submit" name="Submit"/>
                    </form>
                </div>
                {this.state.display == true ? <ResultCards searching={this.state.searching}/> : <h3>Try typing something into the search bar</h3>}
                
            </div>
        )
    }
}