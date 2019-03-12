import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const styles = theme => ({
})

function Main (props) {
  return (
    <Query
      query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
    >
      {({ loading, error, data }) => {
        console.log({ loading, error, data })
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return data.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>{currency}: {rate}</p>
          </div>
        ))
      }}
    </Query>
  )
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main)
