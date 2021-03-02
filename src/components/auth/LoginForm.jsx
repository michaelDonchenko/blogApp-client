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

const LoginForm = ({ values, handleChange, handleSubmit }) => {
  const classes = styles()
  const { password, username, loading, error } = values

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

  return (
    <Typography component='Typography' className={classes.main}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            variant='standard'
            margin='normal'
            value={username}
            onChange={handleChange}
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoFocus
          />
          <TextField
            variant='standard'
            margin='normal'
            value={password}
            onChange={handleChange}
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
          />

          {loading && <Loader />}
          {displayError()}

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>

          <Grid container className={classes.footer}>
            <Grid item xs>
              <Link
                className={classes.link}
                to='/forgot-password'
                variant='body2'
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link className={classes.link} to='/register' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Typography>
  )
}

export default LoginForm
