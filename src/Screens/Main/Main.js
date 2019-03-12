import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { ErrorSnackbar } from 'Components'
import LinearProgress from '@material-ui/core/LinearProgress'

const styles = theme => ({
})

function Main (props) {
  return (
    <Query
      query={gql`
      {
        games {
          id
          name
        }
      }
    `}
    >
      {({ loading, error, data }) => {
        console.log({ loading, error, data })
        if (loading) return <LinearProgress />
        if (error) return <ErrorSnackbar error={error}/>

        return (<div>23</div>)
      }}
    </Query>
  )
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main)
