import React, { useState } from 'react'
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
import CloseIcon from '@material-ui/icons/Close'
import Loader from '../utils/Loader'
import { Alert } from '@material-ui/lab'
import { forgotPasswordEmail } from '../../controllers/userControllers'

const ForgotPassword = ({
  width,
  classes,
  forgotPassword,
  handleCloseForgotPassword,
}) => {
  const [values, setValues] = useState({
    email: '',
    error: false,
    loading: false,
    success: false,
  })

  const { email, error, loading, success } = values

  const handleChange = (e) => {
    setValues({ ...values, email: e.target.value })
  }

  const displayError = () => {
    if (typeof error === 'string') {
      return (
        <Alert
          style={{ margin: '15px 5px' }}
          variant='outlined'
          severity='error'
        >
          {error}
        </Alert>
      )
    }

    if (typeof error === 'object') {
      return (
        <Alert
          style={{ margin: '15px 5px' }}
          variant='outlined'
          severity='error'
        >
          <ul>
            {error.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </Alert>
      )
    }
  }

  const displaySuccess = () => {
    if (success) {
      return (
        <Alert
          style={{ margin: '15px 5px' }}
          variant='outlined'
          severity='success'
        >
          {success}
        </Alert>
      )
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValues({ ...values, loading: true })
    try {
      const { data } = await forgotPasswordEmail(email)

      if (data.errors) {
        let errors = []
        data.errors.map((err) => errors.push(err.msg))
        return setValues({
          ...values,
          error: errors,
          loading: false,
          success: false,
        })
      }
      if (data.success) {
        setValues({
          ...values,
          loading: false,
          error: false,
          success: data.message,
          email: '',
        })
      }
    } catch (error) {
      setValues({
        ...values,
        loading: false,
        error: error.response.data.message,
      })
    }
  }

  return (
    <Dialog
      fullScreen={width < 600}
      onClose={handleCloseForgotPassword}
      aria-labelledby='forgot-username'
      open={forgotPassword}
    >
      {width < 600 && (
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleCloseForgotPassword}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
      <DialogTitle id='forgot-username'>
        <Typography variant='h6' align='center'>
          Did you forget your password?
        </Typography>
      </DialogTitle>

      <DialogContent>
        <p style={{ color: 'GrayText' }}>
          Type your email address and we will send you password reset link.
        </p>
        <form onSubmit={handleSubmit}>
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

          {displayError()}
          {displaySuccess()}

          <DialogActions>
            {loading ? (
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

export default ForgotPassword
