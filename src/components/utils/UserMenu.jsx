import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PersonIcon from '@material-ui/icons/Person'
import PostAddIcon from '@material-ui/icons/PostAdd'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Link } from 'react-router-dom'
import ChatIcon from '@material-ui/icons/Chat'

export default function UserMenu({
  classes,
  handleLogout,
  open,
  handleClick,
  handleClose,
}) {
  return (
    <div>
      <span
        className={classes.navLink}
        aria-controls='user menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        Open Menu
      </span>
      <Menu
        className={classes.menu}
        id='user menu'
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
      >
        <Link className={classes.link} to={`/private-profile`}>
          <MenuItem className={classes.item} onClick={handleClose}>
            <PersonIcon className={classes.icon} /> Profile
          </MenuItem>
        </Link>

        <Link className={classes.link} to={`/new-post`}>
          <MenuItem className={classes.item} onClick={handleClose}>
            <PostAddIcon className={classes.icon} /> New Post
          </MenuItem>
        </Link>

        <MenuItem className={classes.item} onClick={handleClose}>
          <ChatIcon className={classes.icon} /> My Posts
        </MenuItem>

        <MenuItem className={classes.item} onClick={handleLogout}>
          <ExitToAppIcon className={classes.icon} /> Log-out
        </MenuItem>
      </Menu>
    </div>
  )
}