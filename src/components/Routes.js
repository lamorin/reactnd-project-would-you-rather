import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home,
    index: 0
  },
  {
    path: '/new',
    sidebarName: 'New Question',
    component: NewQuestion,
    index: 1
  },
  {
    path: '/leader-board',
    sidebarName: 'Leader Board',
    component: LeaderBoard,
    index: 2
  },
];

export default Routes;