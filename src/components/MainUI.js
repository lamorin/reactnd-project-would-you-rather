import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { setActiveTab } from '../actions/panels'
import { connect } from 'react-redux'
import { deepOrange } from '@material-ui/core/colors'
import Link from '@material-ui/core/Link'
import { showUnansweredQuestionsTabs } from '../actions/home'
import { setAuthedUserId } from '../actions/authedUserId'
import {} from '../actions/panels'

import { NavLink, withRouter } from 'react-router-dom'

import Routes from '../Routes'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: { flexFlow: 'row', marginBottom: 50 },
  selectedTab: {
    color: theme.palette.getContrastText(deepOrange[500]),
  },

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

function TabWithLink(props) {
  const tabProps = { ...props }
  delete tabProps.fullWidth
  return (
    <NavLink to={props.to} style={props.style}>
      <Tab label={tabProps.sidebarName} style={tabProps.style} {...tabProps} />
    </NavLink>
  )
}

function MainUI(props) {
  const { activeTab, authedUserId, users, dispatch } = props
  const classes = useStyles()

  const handleClickOnTab = (event, newValue) => {
    const { dispatch } = props
    //dispatch(setSelectedQuestion(null))
    dispatch(setActiveTab(newValue))
  }

  const logoutHandler = () => {
    dispatch(setAuthedUserId(null))
    dispatch(showUnansweredQuestionsTabs())
    dispatch(setActiveTab(0))
  }

  const authedUser = users[authedUserId]

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Tabs
            value={activeTab}
            onChange={handleClickOnTab}
            aria-label="simple tabs example"
          >
            {Routes.map((prop, key) => {
              if (prop.index === 3) {
                return (
                  <TabWithLink
                    style={{ display: 'none' }}
                    to={prop.path}
                    className={classes.selectedTab}
                    key={key}
                    label={prop.sidebarName}
                    onClick={() => {
                      dispatch(setActiveTab(prop.index))
                      dispatch(showUnansweredQuestionsTabs())
                      //dispatch(setSelectedQuestion(null))
                    }}
                  />
                )
              }
              return (
                <TabWithLink
                  to={prop.path}
                  className={classes.selectedTab}
                  key={key}
                  label={prop.sidebarName}
                  onClick={() => {
                    dispatch(setActiveTab(prop.index))
                    dispatch(showUnansweredQuestionsTabs())
                    //dispatch(setSelectedQuestion(null))
                  }}
                />
              )
            })}
          </Tabs>
          <div className={classes.user}>
            <Typography className={classes.username}>
              Hello, {authedUser.name}
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
    </div>
  )
}

function mapStateToProps({ authedUserId, users, activeTab }) {
  return {
    authedUserId,
    users,
    activeTab,
  }
}

export default connect(mapStateToProps)(withRouter(MainUI))
