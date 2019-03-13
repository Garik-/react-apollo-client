import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import classNames from 'classnames'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  }
})

function EditButton (props) {
  const { classes, className } = props
  return (
    <Fab color='secondary' aria-label='Edit' className={classNames(classes.fab, className)}>
      <EditIcon />
    </Fab>
  )
}

EditButton.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default withStyles(styles)(EditButton)
