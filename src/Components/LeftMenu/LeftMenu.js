import React from 'react'
import PropTypes from 'prop-types'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import SendIcon from '@material-ui/icons/Send'

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
})

function LeftMenu (props) {
  const { classes } = props

  return (
    <MenuList>
      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <SendIcon />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary='Games' />
      </MenuItem>
    </MenuList>

  )
}

LeftMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LeftMenu)
