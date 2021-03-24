import React, { useState, useContext } from 'react'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import bannedImg from '../../../images/banned.jpg'
import { banUser } from '../../../controllers/userControllers'
import { AuthContext } from '../../../context/authContext'
import { Alert } from '@material-ui/lab'

const UserDiv = ({ user, classes }) => {
  const [values, setValues] = useState({
    banned: user.banned,
    loading: false,
    error: false,
    message: false,
  })

  const { banned, loading, error, message } = values
  const { state } = useContext(AuthContext)
  const { token } = state

  const handleBanUser = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await banUser(token, user._id, banned)
      setValues({
        ...values,
        loading: false,
        message: data.message,
        error: false,
      })
    } catch (error) {
      setValues({
        ...values,
        loading: false,
        message: false,
        error: error.response.data.message,
      })
    }
  }

  const displaySuccess = () => {
    if (message) {
      return (
        <Alert
          style={{ width: '90%', margin: '10px 0' }}
          variant='outlined'
          severity='success'
        >
          {message}
        </Alert>
      )
    }
  }

  const displayError = () => {
    if (error) {
      return (
        <Alert
          style={{ width: '90%', margin: '10px 0' }}
          variant='outlined'
          severity='error'
        >
          {error}
        </Alert>
      )
    }
  }

  return (
    <div key={user._id} className={classes.flexDiv}>
      <div>
        <img
          className={classes.image}
          src={user.banned ? bannedImg : user.images[0].url}
          alt='Could not display image'
        />
      </div>

      <div>
        <Link className={classes.link} to={`/public-user/${user.username}`}>
          <Typography variant='subtitle1'>
            <span style={{ color: 'GrayText' }}>Username: </span>
            {user.username}
          </Typography>
          <Typography variant='subtitle1'>
            <span style={{ color: 'GrayText' }}>Email: </span> {user.email}
          </Typography>
          <Typography variant='subtitle1'>
            <span style={{ color: 'GrayText' }}>Status: </span>
            {user.verified ? 'Active' : 'Not Verified'}
          </Typography>
        </Link>
      </div>

      <div className={classes.flexDiv2}>
        <FormControl className={classes.select}>
          <InputLabel id='status'>Ban status</InputLabel>
          <Select
            labelId='status'
            value={banned}
            onChange={(e) => setValues({ ...values, banned: e.target.value })}
          >
            <MenuItem value={true}>True</MenuItem>
            <MenuItem value={false}>False</MenuItem>
          </Select>
        </FormControl>

        <Button
          onClick={handleBanUser}
          variant='contained'
          className={classes.button}
          color='primary'
        >
          {loading ? 'Loading..' : 'Save'}
        </Button>
      </div>

      {displayError()}
      {displaySuccess()}
    </div>
  )
}

export default UserDiv
