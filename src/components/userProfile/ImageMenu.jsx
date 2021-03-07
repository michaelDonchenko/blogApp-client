import React from 'react'
import { makeStyles, Menu, MenuItem } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AccountBoxIcon from '@material-ui/icons/AccountBox'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  menu: {
    '& .MuiList-padding': {
      paddingTop: '5px',
    },
  },
  item: {
    margin: '10px',
  },
  icon: {
    margin: '0 7px 0 0 ',
  },
})

const ImageMenu = ({
  values,
  setValues,
  imgMenu,
  handleImageDelete,
  handleProfileImage,
}) => {
  const classes = useStyles()

  return (
    <Menu
      className={classes.menu}
      id='imageMenu'
      anchorEl={imgMenu}
      keepMounted
      open={Boolean(imgMenu)}
      onClose={() => setValues({ ...values, imgMenu: false })}
    >
      <MenuItem className={classes.item} onClick={() => handleProfileImage()}>
        <AccountBoxIcon className={classes.icon} /> Set as profile picture
      </MenuItem>

      <MenuItem className={classes.item} onClick={() => handleImageDelete()}>
        <DeleteIcon className={classes.icon} /> Delete
      </MenuItem>
    </Menu>
  )
}

export default ImageMenu
