import { string, shape, boolean, element } from 'prop-types'

export const routeType = {
  path: string.isRequired,
  name: string.isRequired,
  exact: boolean,
  component: element
}

export default shape(routeType)
