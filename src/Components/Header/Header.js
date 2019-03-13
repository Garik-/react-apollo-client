import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  }
})

function Header (props) {
  const { classes } = props
  return (
    <AppBar position='fixed' color='primary' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' color='inherit' className={classes.grow}>
              Gar|k
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
