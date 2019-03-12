import React from 'react'
import { Route, Switch } from 'react-router' // react-router v4
import routes from './Routes'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Header, Menu } from 'Components'
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
    flexGrow: 1
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
        <Grid container className={classes.root}>
          <Grid item><Menu routes={routes}/></Grid>
          <Grid item xs>
            <Header />
            {this.renderRoutes(location)}
          </Grid>
        </Grid>
      )} />
    )
  }
}

Routes.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Routes)
export { routes }
