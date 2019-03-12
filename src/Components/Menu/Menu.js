import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ListItemText from '@material-ui/core/ListItemText'
const styles = theme => ({
  primary: {},
  icon: {}
})

function Menu (props) {
  const { classes, routes } = props
  const renderMenuItem = ({ name, path }) => {
    return (
      <MenuItem selected={ window.location.pathname === path } key={`menu-${name}`}>
        <ListItemText classes={{ primary: classes.primary }} inset primary={name} />
      </MenuItem>
    )
  }

  return (
    <MenuList>{ routes.map(renderMenuItem) }</MenuList>
  )
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired // TODO: need typing
}

export default withStyles(styles)(Menu)
