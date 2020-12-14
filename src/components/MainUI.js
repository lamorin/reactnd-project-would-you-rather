import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { setActivePanel } from '../actions/panels'
import { connect } from 'react-redux'
import { deepOrange } from '@material-ui/core/colors'
import Link from '@material-ui/core/Link'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

import { setSelectedQuestion } from '../actions/selectedQuestion'
import { showQuestionsTabs } from '../actions/home'
import { setAuthedUser } from '../actions/authedUser'
import {} from '../actions/panels'
import TabPanel from './TabPanel'


function tabProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: { flexFlow: 'row', marginBottom: 50 },

  title: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-between',
    //maxWidth: '2024px',
    minWidth: '1024px',
    margin: '0 auto',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  link: {
    textDecoration: 'none !important',
  },
  links: {
    display: 'flex',
    marginRight: '100px',
  },
  user: { display: 'flex', flexFlow: 'row' },
  avatar: { display: 'inline-block', margin: '0 5px' },
  username: {
    display: 'inline-block',
    fontSize: '0.8rem',
    alignSelf: 'center',
  },
  logout: {
    display: 'inline-block',
    fontSize: '0.8rem',
    alignSelf: 'center',
    pointer: 'cursor',
    textDecoration: 'none !important',
  },
}))

function MainUI(props) {
  const { activePanel, authedUser, dispatch } = props
  const classes = useStyles()
  const handleChange = (event, newValue) => {
    const { dispatch } = props
    dispatch(setSelectedQuestion(null))
    dispatch(setActivePanel(newValue))
  }

  const logoutHandler = () => {
    dispatch(setAuthedUser(null))
    dispatch(showQuestionsTabs())
    dispatch(setActivePanel(0))
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Tabs
            value={activePanel}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Home" {...tabProps(0)}/>
            <Tab label="New Question" {...tabProps(1)} />
            <Tab label="Leader Board" {...tabProps(2)} />
          </Tabs>
          <div className={classes.user}>
            <Typography className={classes.username}>
              Hello, {authedUser.id}
            </Typography>

            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src={authedUser.avatarURL}
            />

            <Link
              href="#"
              className={classes.logout}
              onClick={logoutHandler}
              color="inherit"
            >
              Logout
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <TabPanel value={activePanel} index={0}>
        <Home></Home>
      </TabPanel>
      <TabPanel value={activePanel} index={1}>
        <NewQuestion></NewQuestion>
      </TabPanel>
      <TabPanel value={activePanel} index={2}>
        <LeaderBoard></LeaderBoard>
      </TabPanel>
    </div>
  )
}

function mapStateToProps({ authedUser, activePanel }) {
  return {
    authedUser,
    activePanel,
  }
}

export default connect(mapStateToProps)(MainUI)
