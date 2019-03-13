import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Menu } from 'Components'
import Drawer from '@material-ui/core/Drawer'

const styles = {
  list: {
    width: 250
  }
}
function DrawerMenu (props) {
  const { classes, open, handleClose } = props
  return (
    <div className={classes.list}>
      <Drawer open={open} onClose={handleClose}>
        <div
          tabIndex={0}
          role='button'
          onClick={handleClose}
          onKeyDown={handleClose}
        >
          <Menu/>
        </div>
      </Drawer>
    </div>
  )
}

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default withStyles(styles)(DrawerMenu)
