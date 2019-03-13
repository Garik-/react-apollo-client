import { string, shape } from 'prop-types'
import imagesType from '../Image/ImagesType'
export const gameType = {
  id: string.isRequired,
  name: string.isRequired,
  images: imagesType
}

export default shape(gameType)
