import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete'
import classNames from 'classnames'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  }
})

function DeleteButton (props) {
  const { classes, className } = props
  return (
    <Fab disabled aria-label='Delete' className={classNames(classes.fab, className)}>
      <DeleteIcon />
    </Fab>
  )
}

DeleteButton.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default withStyles(styles)(DeleteButton)
