import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { ErrorSnackbar, AddButton, Header } from 'Components'
import LinearProgress from '@material-ui/core/LinearProgress'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative'
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
})

function Categories (props) {
  const { classes } = props
  return (
    <Query
      query={gql`
      {
        categories {
          name
        }
      }
    `}
    >
      {({ loading, error, data }) => {
        if (loading) return <LinearProgress />
        if (error) return <ErrorSnackbar error={error}/>

        return (
          <React.Fragment>
          <Header title='Categories'/>
          <div className={classes.root}>
          sfsdf
            <AddButton className={classes.fab}/>
          </div>
          </React.Fragment>)
      }}
    </Query>
  )
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Categories)
