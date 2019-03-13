import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Link } from 'react-router-dom'
import GamesIcon from '@material-ui/icons/Games'
import routes from '../../Router/Routes'

const styles = theme => ({
  menuList: {
    padding: 0
  },
  menuLink: {
    textDecoration: 'none'
  },
  primary: {},
  icon: {
  }
})

const icons = {
  'Games': <GamesIcon/>,
  'Categories': <GamesIcon/>
}

function Menu (props) {
  const { classes } = props
  const renderMenuItem = ({ name, path }) => {
    return (
      <Link to={path} className={classes.menuLink} key={`menu-${name}`}>
        <MenuItem className={classes.menuItem} selected={ window.location.pathname === path }>
          { name }
          {/* { name in icons && (<ListItemIcon className={classes.icon}>{icons[name]}</ListItemIcon>) }
          <ListItemText inset primary={name} /> */}
        </MenuItem>
      </Link>

    )
  }

  return (
    <MenuList className={classes.menuList}>{ routes.map(renderMenuItem) }</MenuList>
  )
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Menu)
