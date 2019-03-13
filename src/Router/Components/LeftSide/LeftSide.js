import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Menu } from 'Components'
import Typography from '@material-ui/core/Typography';
const HEADER_HEIGHT = 63

const styles = theme => {
  console.log(theme)
  return {
    root: {
      borderRight: `1px solid ${theme.palette.divider}`,
      position: 'sticky',
      top: 0,
      height: '100vh',
      width: 250,
    },
    header: {
      height: HEADER_HEIGHT,
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit * 2}px`
    }
  }
}

function LeftSide (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h6'>DGaming Store</Typography>
        <Typography variant='caption'>&copy; Gar|k</Typography>
      </div>
      <div className={classes.content}><Menu /></div>
    </div>
  )
}

LeftSide.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LeftSide)
