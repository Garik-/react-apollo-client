import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
import {
  // DrawerMenu
  Search
} from './Components'

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

function Header (props) {
  // const [menuOpen, setMenuOpen] = React.useState(false)
  const { classes, title, handleSearch } = props
  return (
    <React.Fragment>
      {/* <DrawerMenu open={menuOpen} handleClose={() => setMenuOpen(false)}/> */}
      <AppBar position='sticky' color='primary'>
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color='inherit' aria-label='Menu' onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </IconButton> */}
          { title && (<Typography variant='h6' color='inherit' className={classes.grow}>
            {title}
          </Typography>)}
          { handleSearch && <Search handleSearch={handleSearch}/> }
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  handleSearch: PropTypes.func
}

export default withStyles(styles)(Header)
