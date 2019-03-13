import React from 'react'
import { Route, Switch } from 'react-router' // react-router v4
import routes from './Routes'
import { Grid } from '@material-ui/core'
import { LeftSide } from './Components'
import CssBaseline from '@material-ui/core/CssBaseline'
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
    return (
      <React.Fragment>
        <CssBaseline />
        <Route render={({ location }) => (
          <Grid container>
            <Grid item><LeftSide/></Grid>
            <Grid item xs>{this.renderRoutes(location)}</Grid>
          </Grid>
        )} />
      </React.Fragment>
    )
  }
}

export default Routes
export { routes }
