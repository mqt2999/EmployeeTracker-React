import React, { Component } from 'react';
import Search from './Search';
import Header from './Header';
import EmployeeContainer from "./EmployeeContainer";
import API from "../utils/API";

class Main extends Component {
  state = {
    search: "",
    results: [],
    resultsFilter: [],
      
  };

  componentDidMount() {
    API.search()
      .then(res => this.setState(
        {results: res.data.results, resultsFilter: res.data.results}))
        .catch(err => console.log(err))
  };

  handleInputChange = event => {
    // console.dir(event.target)
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    const search = event.target.value
    const resultsFilter = this.state.results.filter(result => {
      let data = Object.values(result).join('').toLowerCase();
      return data.indexOf(search.toLowerCase()) !== -1;
    })

    this.setState({resultsFilter: resultsFilter})
  };

  handleSort = () => {
    //flag/state/marker see if ascend/descend then switch it
    if (this.state.order === 'ascend') {
      this.setState({order: 'descend'}) 
    } else {
      this.setState({order: 'ascend'})
    }

    console.log(this.state.order);
    // if state === descend then run sort below
    if (this.state.order === 'ascend'){
      const sortResults = this.state.results.sort((a,b) => {
        return (a.name.last < b.name.last) ?  -1 : 1
      })
      this.setState({results: sortResults})
    } else {
      const sortResults = this.state.results.sort((a,b) => {
        return (b.name.last < a.name.last) ?  -1 : 1
      })
      this.setState({results: sortResults})
    }

  };

  render() {
    return <>
    <Header />
    <Search handleFormSubmit={this.handleFormSubmit} />
    <EmployeeContainer resultsFilter={this.state.resultsFilter} handleSort={this.handleSort}/>
    </>
  }
}

export default Main; 