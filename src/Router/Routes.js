import { Games, Categories } from 'Screens'
// import GamesIcon from '@material-ui/icons/Games'
const routes = [
  {
    path: '/',
    name: 'Games',
    exact: true,
    component: Games
  },
  {
    path: '/categories',
    name: 'Categories',
    exact: false,
    component: Categories
  }
]

export default routes
