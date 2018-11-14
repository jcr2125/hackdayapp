import React, { Component } from 'react';
import ResultCards from './result_cards';
import { Button, Input, Icon } from 'semantic-ui-react'
import '../App.css';
import index from '../elasticlunr_search'

export default class SearchCard extends Component{
    constructor(props) {
        super(props)
        this.state = {
          search_term: "",
          display: false,
          case_numbers: []
        }
      }

    handleChange = (e) => {
        this.setState({
            search_term: e.target.value
        })

        // console.log("state");
        // console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.search_term.trim() === ""){
            this.setState({
                display: false
            })
        }
        else{
            let results = index.search(this.state.search_term)

            this.setState({
                display: true,
                case_numbers: [...results]
            })
        }

        


        console.log("submit");
        console.log(this.state);
    }
    // <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
    render(){
        return (
            <div>
                <div className="search_bar">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Search Card</h1>
                        <label>
                            What would you like to Search for?
                        </label>
                        <Input type="text" name="search_term" value={this.state.search_term} onChange={this.handleChange} icon={<Icon name='search' inverted circular link />}/>
                        <Button content="submit" onClick={this.handleSubmit}/>
                    </form>
                </div>
                {this.state.display == true ? <ResultCards case_numbers={this.state.case_numbers}/> : <h3>Try typing something into the search bar</h3>}   
            </div>
        )
    }
}