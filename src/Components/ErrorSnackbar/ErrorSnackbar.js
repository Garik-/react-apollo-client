import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import ErrorIcon from '@material-ui/icons/Error'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import classNames from 'classnames'

const styles = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})

class ErrorSnackbar extends React.Component {
    state = {
      open: true
    }

    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return
      }

      this.setState({ open: false })
    }

    render () {
      const { vertical, horizontal, classes, error } = this.props
      const { open } = this.state
      return (<Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={this.handleClose}
      >
        <SnackbarContent className={classes.error}
          message={
            <span id='client-snackbar' className={classes.message}>
              <ErrorIcon className={classNames(classes.icon, classes.iconVariant)} />
              {error.message}
            </span>
          }
          action={[
            <IconButton
              key='close'
              aria-label='Close'
              color='inherit'
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>
          ]} />
      </Snackbar>

      )
    }
}

ErrorSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  vertical: PropTypes.string,
  horizontal: PropTypes.string
}

export default withStyles(styles)(ErrorSnackbar)
