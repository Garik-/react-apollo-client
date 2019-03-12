import { Games, Categories } from 'Screens'

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
    exact: true,
    component: Categories
  }
]

export default routes
