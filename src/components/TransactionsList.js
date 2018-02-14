import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  const d = props.data
  .filter((data) => data.description.includes(props.filter) || data.category.includes(props.filter))
  .map((data) => <Transaction posted={data.posted_at} description={data.description} category={data.category} amount={data.amount} key={data.id}/>)

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {d}

      </tbody>
    </table>
  )
}

export default TransactionsList
