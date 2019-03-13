import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import gamesType from 'Types/Game/GamesType'
import GameTableItemAvatar from '../GameTableItemAvatar'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

function GameTable (props) {
  const { games, classes } = props
  return (
    <List className={classes.root}>{
      games.map(({ id, name, images }) => (
        <ListItem key={`game-${id}`} button>
          <GameTableItemAvatar alt={name} images={images}/>
          <ListItemText primary={name}/>
        </ListItem>
      ))
    }</List>
  )
}

GameTable.propTypes = {
  classes: PropTypes.object.isRequired,
  games: gamesType.isRequired
}

export default withStyles(styles)(GameTable)
