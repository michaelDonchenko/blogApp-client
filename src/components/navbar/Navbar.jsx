import React, { useContext, useState } from 'react'
import { AppBar } from '@material-ui/core'
import useStyles from './styles'
import { AuthContext } from '../../context/authContext'
import ToolBar from './ToolBar'

const Navbar = () => {
  const classes = useStyles()
  const { state, dispatch } = useContext(AuthContext)
  const { user, token } = state

  const [open, setOpen] = useState(null)

  const handleClick = (event) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    dispatch({
      type: 'LOGOUT',
    })

    handleClose()
  }

  return (
    <AppBar position='sticky' className={classes.root}>
      <ToolBar
        user={user}
        token={token}
        handleLogout={handleLogout}
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
      />
    </AppBar>
  )
}

export default Navbar
