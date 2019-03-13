import React from 'react'
import { Route, Switch } from 'react-router' // react-router v4
import routes from './Routes'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Header, Menu } from 'Components'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'

const styles = {
  root: {
    flexGrow: 1
  },
  paper: {
    paddingBottom: 64,
  }
}

class Routes extends React.Component {
  state = { loading: true }

  renderRoute = (route, index) => {
    const { exact, path, component } = route
    return (
      <Route
        key={`route:${index}`}
        exact={exact}
        path={path}
        component={component} />
    )
  }

  renderRoutes = (location) => {
    return (
      <Switch location={location}>
        {routes.map(this.renderRoute)}
      </Switch>
    )
  }

  render () {
    const { classes } = this.props
    return (
      <Route render={({ location }) => (
        <React.Fragment>
          <CssBaseline />
          <Paper square className={classes.paper}>
            {this.renderRoutes(location)}
          </Paper>
          <Header/>
        </React.Fragment>
      )} />
    )
  }
}

Routes.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Routes)
export { routes }
