import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import gamesType from 'Types/Game/GamesType'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

const renderAvatar = (images, alt) => {
  if (images && Array.isArray(images) && images.length >= 1) {
    const { link } = images[0]
    return (
      <ListItemAvatar>
        <Avatar alt={alt} src={`http://157.230.226.124/media/${link}`} />
      </ListItemAvatar>
    )
  }

  return null
}

function GameTable (props) {
  const { games, classes } = props
  return (
    <List className={classes.root}>{
      games.map(({ id, name, images }) => (
        <ListItem key={`game-${id}`} button>
          { renderAvatar(images, name) }
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
