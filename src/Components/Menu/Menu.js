import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Link } from 'react-router-dom'
import GamesIcon from '@material-ui/icons/Games'

const styles = theme => ({
  menuLink: {
    textDecoration: 'none'
  },
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

const icons = {
  'Games': <GamesIcon/>
}

function Menu (props) {
  const { routes, classes } = props
  const renderMenuItem = ({ name, path }) => {
    return (
      <Link to={path} className={classes.menuLink} key={`menu-${name}`}>
        <MenuItem className={classes.menuItem} selected={ window.location.pathname === path }>
          { name in icons && (<ListItemIcon className={classes.icon}>{icons[name]}</ListItemIcon>) }
          <ListItemText inset primary={name} />
        </MenuItem>
      </Link>

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
