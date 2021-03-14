import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import Loader from '../utils/Loader'

const ForgotUsername = ({
  forgotUsername,
  handleCloseForgotUsername,
  width,
  classes,
  fetchUsername,
  handleChange,
  values,
  displayUsername,
  displayUsernameError,
}) => {
  const { email, loadingUsername } = values

  return (
    <Dialog
      fullScreen={width < 600}
      onClose={handleCloseForgotUsername}
      aria-labelledby='forgot-username'
      open={forgotUsername}
    >
      {width < 600 && (
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleCloseForgotUsername}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
      <DialogTitle id='forgot-username'>
        <Typography variant='h6' align='center'>
          Did you forget your username?
        </Typography>
      </DialogTitle>

      <DialogContent>
        <p style={{ color: 'GrayText' }}>
          Type your email address in order to see your username.
        </p>
        <form onSubmit={fetchUsername}>
          <TextField
            variant='standard'
            value={email}
            onChange={handleChange}
            fullWidth
            id='email'
            label='Email Address'
            placeholder='Your Email'
            name='email'
          ></TextField>

          {displayUsername()}
          {displayUsernameError()}

          <DialogActions>
            {loadingUsername ? (
              <Loader />
            ) : (
              <Button
                type='submit'
                className={classes.button}
                color='primary'
                variant='contained'
                fullWidth
              >
                Send
              </Button>
            )}
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ForgotUsername
