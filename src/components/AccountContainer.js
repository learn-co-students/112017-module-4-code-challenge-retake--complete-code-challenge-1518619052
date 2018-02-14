import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
//import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API

  state = {
    transactions: [],
    searchTerm: ''
  }

  componentDidMount = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => this.setState({transactions: data}))
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm}/>
      </div>
    )
  }
}

export default AccountContainer
