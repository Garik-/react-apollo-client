import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import imagesType from 'Types/Image/ImagesType'

const styles = theme => ({})

function GameTableItemAvatar (props) {
  const { images, alt } = props

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

GameTableItemAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  images: imagesType.isRequired
}

export default withStyles(styles)(GameTableItemAvatar)
