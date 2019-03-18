import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { ErrorSnackbar, AddButton, EditButton, DeleteButton, Header } from 'Components'
import { GameTable } from './Components'
import LinearProgress from '@material-ui/core/LinearProgress'
import { debounce } from 'lodash'
const DEBOUNCE_TIMEOUT = 300

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    height: '100%'
  },
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  fabPanel: {
    position: 'fixed',
    right: theme.spacing.unit,
    bottom: theme.spacing.unit
  }
})

function Games (props) {
  const { classes } = props
  const [search, setSearch] = React.useState('')

  const debounceSetSearch = debounce(value => setSearch(value), DEBOUNCE_TIMEOUT)

  function handleSearch (e) {
    debounceSetSearch(e.target.value)
  }

  console.log(search)

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
          <React.Fragment>
            <Header handleSearch={handleSearch} />
            <div className={classes.root}>
              <GameTable games={data.games}/>
              <div className={classes.fabPanel}>
                <AddButton/>
                <EditButton />
                <DeleteButton />
              </div>
            </div>
          </React.Fragment>
        )
      }}
    </Query>
  )
}

Games.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Games)
