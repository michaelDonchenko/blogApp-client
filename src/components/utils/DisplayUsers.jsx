import React, { useEffect } from 'react'
import {
  AppBar,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Paginate from './Paginate'
import Loader from '../utils/Loader'
import { Link } from 'react-router-dom'

const DisplayUsers = ({
  width,
  classes,
  displayUsers,
  handleClose,
  fetchUsers,
  values,
  handlePageChange,
}) => {
  const { pages, page, users, loadingUsers } = values

  useEffect(() => {
    fetchUsers()
  }, [page])

  return (
    <Dialog
      scroll='paper'
      fullScreen={width < 600}
      onClose={handleClose}
      aria-labelledby='display-users'
      open={displayUsers}
    >
      {width < 600 && (
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
      <DialogTitle id='display-users'>
        <Typography variant='h5' align='center'>
          Website Users
        </Typography>
      </DialogTitle>

      <DialogContent>
        {loadingUsers ? (
          <Loader />
        ) : users && users.length > 0 ? (
          <div className={classes.dialogFlex}>
            {users.map((user) => (
              <div key={user._id} className={classes.userDiv}>
                <div>
                  <img
                    className={classes.image}
                    src={user.images[0].url}
                    alt='Could not display image'
                  />
                </div>

                <div>
                  <Link
                    className={classes.link}
                    to={`/public-user/${user.username}`}
                  >
                    <Typography variant='subtitle1'>
                      <span style={{ color: 'GrayText' }}>Username: </span>{' '}
                      {user.username}
                    </Typography>
                    <Typography variant='subtitle1'>
                      <span style={{ color: 'GrayText' }}>Email: </span>{' '}
                      {user.email}
                    </Typography>
                    <Typography variant='subtitle1'>
                      <span style={{ color: 'GrayText' }}>Status: </span>{' '}
                      {user.verified ? 'Active' : 'Not Verified'}
                    </Typography>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No users found...</p>
        )}
        <Paginate
          page={page}
          pages={pages}
          handlePageChange={handlePageChange}
        />
      </DialogContent>
    </Dialog>
  )
}

export default DisplayUsers
