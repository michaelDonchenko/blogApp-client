import { Button, Container, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {
  resetPasswordValidation,
  resetPasswordAction,
} from '../../controllers/userControllers'
import styles from './styles'
import Loader from '../../components/utils/Loader'
import { Alert } from '@material-ui/lab'

const ResetPassword = ({ match }) => {
  const classes = styles()
  const [values, setValues] = useState({
    loading: false,
    error: false,
    success: false,
    message: '',
    password: '',
    confirmPassword: '',
    resetError: false,
    resetSuccess: false,
  })

  const {
    loading,
    error,
    success,
    password,
    confirmPassword,
    resetError,
    resetSuccess,
  } = values

  const resetPasswordToken = match.params.resetPasswordToken

  const validation = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await resetPasswordValidation(resetPasswordToken)
      if (data.success) {
        setValues({
          ...values,
          error: false,
          loading: false,
          success: data.success,
          message: data.message,
        })
      }
    } catch (error) {
      setValues({
        ...values,
        success: false,
        loading: false,
        error: error.response.data.message,
      })
    }
  }

  useEffect(() => {
    validation()
  }, [])

  const displayError = () => {
    if (error) {
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
  }

  const displayResetError = () => {
    if (resetError) {
      return (
        <Alert
          style={{ margin: '15px 5px' }}
          variant='outlined'
          severity='error'
        >
          {resetError}
        </Alert>
      )
    }
  }

  const displayResetSuccess = () => {
    if (resetSuccess) {
      return (
        <Alert
          style={{ margin: '15px 5px' }}
          variant='outlined'
          severity='success'
        >
          {resetSuccess}
        </Alert>
      )
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValues({ ...values, loading: true })
    try {
      const { data } = await resetPasswordAction(
        password,
        confirmPassword,
        resetPasswordToken
      )
      if (data.success) {
        setValues({
          ...values,
          loading: false,
          resetError: false,
          resetSuccess: data.message,
          password: '',
          confirmPassword: '',
        })
      }
    } catch (error) {
      setValues({
        ...values,
        resetSuccess: false,
        loading: false,
        resetError: error.response.data.message,
      })
    }
  }

  return (
    <Container maxWidth='xs' className={classes.root}>
      <div className={classes.main}>
        <Typography variant='h6' align='center' className={classes.header}>
          Password reset
        </Typography>
        {loading && <Loader />}
        {displayError()}

        {success ? (
          <form className={classes.paper} onSubmit={handleSubmit}>
            {displayResetError()}
            {displayResetSuccess()}

            <TextField
              style={{ margin: '10px 0' }}
              variant='standard'
              onChange={handleChange}
              value={password}
              fullWidth
              name='password'
              label='New Password'
              type='password'
            />

            <TextField
              style={{ margin: '10px 0' }}
              variant='standard'
              onChange={handleChange}
              value={confirmPassword}
              fullWidth
              name='confirmPassword'
              label='Confirm Password'
              type='password'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              confirm
            </Button>
          </form>
        ) : null}
      </div>
    </Container>
  )
}

export default ResetPassword
