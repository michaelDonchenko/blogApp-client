import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position='sticky' className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <NavLink className={classes.navLink} to='/'>
          <Typography variant='body1' className={classes.mainButton}>
            Mike's Blog
          </Typography>
        </NavLink>
        <div style={{ flexGrow: 1 }}></div>

        <>
          <NavLink className={classes.navLink} to='/login'>
            <Button variant='button' className={classes.navButton}>
              login
            </Button>
          </NavLink>

          <NavLink className={classes.navLink} to='/register'>
            <Button variant='button' className={classes.navButton}>
              register
            </Button>
          </NavLink>
        </>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
