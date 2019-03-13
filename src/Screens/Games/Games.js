import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { ErrorSnackbar, AddButton } from 'Components'
import { GameTable } from './Components'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative'
  },
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  fab: {
    position: 'fixed',
    right: theme.spacing.unit,
    bottom: theme.spacing.unit
  }
})

function Games (props) {
  const { classes } = props
  return (
    <Query
      query={gql`
      {
        games {
          id
          name
          images(where: { type: "game_avatar"}) {
            link
          }
        }
      }
    `}
    >
      {({ loading, error, data }) => {
        if (loading) return <LinearProgress />
        if (error) return <ErrorSnackbar error={error}/>

        return (
          <div className={classes.root}>
            <Typography className={classes.text} variant='h5' gutterBottom>Games</Typography>
            <GameTable games={data.games}/>
            <AddButton className={classes.fab}/>
          </div>)
      }}
    </Query>
  )
}

Games.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Games)
