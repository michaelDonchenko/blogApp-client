import React, { useContext } from 'react'
import { AppBar } from '@material-ui/core'
import useStyles from './styles'
import { AuthContext } from '../../context/authContext'
import ToolBar from './ToolBar'

const Navbar = () => {
  const classes = useStyles()
  const { state, dispatch } = useContext(AuthContext)
  const { user, token } = state

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    dispatch({
      type: 'LOGOUT',
    })
  }

  return (
    <AppBar position='sticky' className={classes.root}>
      <ToolBar user={user} token={token} handleLogout={handleLogout} />
    </AppBar>
  )
}

export default Navbar
