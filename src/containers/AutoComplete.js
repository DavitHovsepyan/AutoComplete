import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

import { baseURL } from '../constants';

class AutoComplete extends Component {

  state = {
    searchText: '',
    suggestions: []
  }

  handleInputChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  onSuggestionsFetchRequested = (e) => {
    fetch(`${baseURL}/news/suggestions?searchBy=${e.value}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => {
      this.setState({suggestions: response.data})
    })
    .catch(error => console.error('Error:', error));
  }

  searchNews = () => {
    document.location.href = `?searchBy=${this.state.searchText}`
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (e, {suggestionValue}) => {
    this.setState({
      searchText: suggestionValue,
      suggestions: []
    })
  }

  getSuggestionValue = suggestion => suggestion.searchText

  renderSuggestion = suggestion => <div>{suggestion.searchText}</div>

  render() {
    const { searchText, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type the search text',
      value: searchText,
      onChange: this.handleInputChange
    };

    return (
      <div>
        <div>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            onSuggestionSelected={this.onSuggestionSelected}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />
          <button onClick={this.searchNews}> Search for News </button>
        </div>
      </div>
    );
  }
}

export default AutoComplete;
