import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'abc'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      query: value
    });
  }

  logQuery() {
    const query = this.state.query;
    console.log(query);
  }

  render() {
    this.logQuery();

    return (
      <form>
        <input
          type="search"
          placeholder="Search for anything..."
          // onChange={this.handleChange}
          // onChange={this.logQuery}
          onChange={event => this.handleChange(event)}
          value={this.state.query}
        />
      </form>
    );
  }
}

export default SearchInput;
