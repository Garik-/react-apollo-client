import { string, shape, oneOf } from 'prop-types'

export const imageType = {
  id: string,
  link: string.isRequired,
  type: oneOf(['game_avatar'])
}

export default shape(imageType)
