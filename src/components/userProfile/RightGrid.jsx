import { Button, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import Loader from '../utils/Loader'

const RightGrid = ({ values, classes, handleChange, handleDetailsUpdate }) => {
  const {
    username,
    about,
    rightGridLoading,
    rightGridError,
    successUpdate,
  } = values

  const displayError = () => {
    if (typeof rightGridError === 'string') {
      return (
        <Alert style={{ margin: '20px 0' }} variant='outlined' severity='error'>
          {rightGridError}
        </Alert>
      )
    }

    if (typeof rightGridError === 'object') {
      return (
        <Alert style={{ margin: '20px 0' }} variant='outlined' severity='error'>
          <ul>
            {rightGridError.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </Alert>
      )
    }
  }

  const displaySuccess = () => {
    if (successUpdate) {
      return (
        <Alert
          style={{ margin: '20px 0' }}
          variant='outlined'
          severity='success'
        >
          {successUpdate}
        </Alert>
      )
    }
  }

  return (
    <Typography component='div' className={classes.flexDiv}>
      <Typography variant='h5' align='center'>
        Update Details
      </Typography>

      <form onSubmit={handleDetailsUpdate} className={classes.detailsForm}>
        <TextField
          onChange={handleChange}
          value={username}
          className={classes.inputField}
          name='username'
          label='New User name'
          type='text'
          helperText='Enter new User name if you want to change it'
        />

        <TextField
          onChange={handleChange}
          value={about}
          className={classes.inputField}
          rows={5}
          multiline
          name='about'
          label='About myself'
          type='text'
          helperText='Write something about yourself'
        />

        {displayError()}
        {displaySuccess()}

        {rightGridLoading ? (
          <Loader />
        ) : (
          <Button type='submit' color='primary' variant='contained'>
            Update Details
          </Button>
        )}
      </form>
    </Typography>
  )
}

export default RightGrid
