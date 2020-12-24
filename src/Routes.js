import Home from './components/Home'
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home,
    index: 0
  },
  {
    path: '/add',
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
  {
    path: '/questions/:questionid',
    sidebarName: 'Questions',
    component: Home,
    index: 3
  },
];

export default Routes;