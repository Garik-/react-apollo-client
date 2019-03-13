import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import classNames from 'classnames'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  }
})

function AddButton (props) {
  const { classes, className } = props
  return (
    <Fab color='primary' aria-label='Add' className={classNames(classes.fab, className)}>
      <AddIcon />
    </Fab>
  )
}

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default withStyles(styles)(AddButton)
