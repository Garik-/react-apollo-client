import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'Components'
import Drawer from '@material-ui/core/Drawer'

function DrawerMenu (props) {
  const { open, handleClose } = props
  return (
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
  )
}

DrawerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default DrawerMenu
