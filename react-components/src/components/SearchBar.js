import React, { Component } from 'react'
import importedNames from '../names'
import names from '../names'

export class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        names: importedNames,
    }
  }  

  handleChange = (event) => {
    const inputText = event.target.value.toLowerCase()
    const filteredNames = importedNames.filter( name => {
        // Returns true if inputText is a substring of name
        // and returns false if it is not
        return name.toLowerCase().includes(inputText) 
    })

    this.setState({
        names: filteredNames
    })
  }

  render() {
    return (
      <div>
        <h1>Name Search</h1>
            <p>Matching names found: {this.state.names.length}</p>
        <form>
            <input 
            type='text'
            placeholder='search names...'
            onChange={(event) => this.handleChange(event)}
            />
        </form>
        <div>
            <p>We will render names here:</p>
            {this.state.names.map(name => {
                return <p key={name}>{name}</p>
            })}
        </div>
      </div>
    )
  }
}

export default SearchBar