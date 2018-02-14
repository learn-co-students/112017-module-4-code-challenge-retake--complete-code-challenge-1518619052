import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'


class AccountContainer extends Component {

  state = {
    data: [],
    filterInput: ''
  }

  componentDidMount() {
    this.getData()
    }

  getData = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(j => this.setState({
      data: j
    }))
  }


  handleChange = (value) => {
    this.setState({
      filterInput: value
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <Search filterInput={this.state.filterInput} handleChange={this.handleChange}/>
        <TransactionsList data={this.state.data} filter={this.state.filterInput}/>
      </div>
    )
  }
}

export default AccountContainer
