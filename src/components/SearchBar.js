import React from 'react';


class SearchBar extends React.Component {



  render() {
    return (
      <React.Fragment>
      <form onSubmit={this.props.handleTheSubmit}>
        <label>
          <input value={this.props.searchBarValue} onChange={this.props.handleChange} type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <select value={this.props.selectedSort} onChange={this.props.handleSelect}>
        <option value="Sort By Name">Sort By Name</option>
        <option value="Sort By Hp">Sort By Hp</option>
      </select>
      </React.Fragment>
    )
  }
}


export default SearchBar
