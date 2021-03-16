import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styles from '../../pages/auth/styles'
import Loader from '../utils/Loader'
import { Alert } from '@material-ui/lab'

const RegisterForm = ({ values, handleChange, handleSubmit }) => {
  const classes = styles()
  const { username, email, password, loading, error, success } = values

  const displayError = () => {
    if (typeof error === 'string') {
      return (
        <Alert style={{ width: '100%' }} variant='outlined' severity='error'>
          {error}
        </Alert>
      )
    }

    if (typeof error === 'object') {
      return (
        <Alert style={{ width: '100%' }} variant='outlined' severity='error'>
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
        <Alert style={{ width: '100%' }} variant='outlined' severity='success'>
          {success}
        </Alert>
      )
    }
  }

  return (
    <Typography component='div' className={classes.main}>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Register
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant='standard'
                value={username}
                onChange={handleChange}
                fullWidth
                id='username'
                label='Username'
                name='username'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='standard'
                value={email}
                onChange={handleChange}
                fullWidth
                id='email'
                label='Email Address'
                name='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='standard'
                onChange={handleChange}
                value={password}
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
              />
            </Grid>
            <Grid item xs={12}></Grid>
            {loading && <Loader />}
            {displayError()}
            {displaySuccess()}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-start' className={classes.footer}>
            <Grid item>
              <Link className={classes.link} to='/login' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Typography>
  )
}

export default RegisterForm
