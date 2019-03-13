import React from 'react'
import { Route, Switch } from 'react-router' // react-router v4
import routes from './Routes'
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
      <Route render={({ location }) => (
        <React.Fragment>
          {this.renderRoutes(location)}
        </React.Fragment>
      )} />
    )
  }
}

export default Routes
export { routes }
