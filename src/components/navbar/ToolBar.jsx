import React from 'react'
import { NavLink } from 'react-router-dom'
import { pink } from '@material-ui/core/colors'
import { Toolbar } from '@material-ui/core'
import useStyles from './styles'
import UserMenu from '../utils/UserMenu'

const ToolBar = ({
  user,
  token,
  handleLogout,
  open,
  handleClick,
  handleClose,
}) => {
  const classes = useStyles()
  return (
    <Toolbar className={classes.toolBar} variant='dense'>
      <NavLink
        exact={true}
        activeStyle={{
          textDecoration: 'underline',
          color: pink[500],
          fontWeight: '700',
        }}
        className={classes.navLink}
        to='/'
      >
        <span className={classes.logo}>Mike's Blog</span>
      </NavLink>
      <div style={{ flexGrow: 1 }}></div>

      {user && token ? (
        <>
          <UserMenu
            classes={classes}
            handleLogout={handleLogout}
            open={open}
            handleClick={handleClick}
            handleClose={handleClose}
            user={user}
          />
        </>
      ) : (
        <>
          <NavLink
            className={classes.navLink}
            exact={true}
            activeStyle={{
              textDecoration: 'underline',
              textDecorationColor: pink[500],
              fontWeight: '700',
            }}
            to='/login'
          >
            Log-in
          </NavLink>

          <NavLink
            exact={true}
            activeStyle={{
              textDecoration: 'underline',
              textDecorationColor: pink[500],
              fontWeight: '700',
            }}
            className={classes.navLink}
            to='/register'
          >
            Register
          </NavLink>
        </>
      )}
    </Toolbar>
  )
}

export default ToolBar
