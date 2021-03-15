import { Button, Container, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import styles from './styles'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ForgotUsername from '../../components/auth/ForgotUsername'
import { getUsername } from '../../controllers/userControllers'
import { Alert } from '@material-ui/lab'
import ForgotPassword from '../../components/auth/ForgotPassword'

const CannotLogin = ({ history }) => {
  const classes = styles()
  const { state } = useContext(AuthContext)
  const { user, token } = state

  const [values, setValues] = useState({
    email: '',
    usernameError: false,
    username: '',
    loadingUsername: false,
  })

  const { email, usernameError, username } = values

  if (user && token) {
    history.push('/')
  }

  const [width, setWidth] = useState(window.innerWidth)
  const handleWithChange = () => {
    setWidth(window.innerWidth)
  }

  const [forgotUsername, setforgotUsername] = useState(false)
  const handleForgotUsername = () => {
    setforgotUsername(true)
  }

  const handleCloseForgotUsername = () => {
    setforgotUsername(false)
  }

  const [forgotPassword, setForgotPassword] = useState(false)
  const handleForgotPassword = () => {
    setForgotPassword(true)
  }

  const handleCloseForgotPassword = () => {
    setForgotPassword(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWithChange)
    return () => window.removeEventListener('resize', handleWithChange)
  }, [])

  const fetchUsername = async (e) => {
    e.preventDefault()
    setValues({ ...values, loadingUsername: true })
    try {
      const { data } = await getUsername(email)

      setValues({
        ...values,
        loadingUsername: false,
        usernameError: false,
        username: `The username for this email is ${data.username}`,
      })
    } catch (error) {
      setValues({
        ...values,
        loadingUsername: false,
        usernameError: error.response.data.message,
        username: '',
      })
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, email: e.target.value })
  }

  const displayUsernameError = () => {
    if (usernameError) {
      return (
        <Alert
          style={{ margin: '15px 5px' }}
          variant='outlined'
          severity='error'
        >
          {usernameError}
        </Alert>
      )
    }
  }

  const displayUsername = () => {
    if (username) {
      return (
        <Alert
          style={{ margin: '15px 5px' }}
          variant='outlined'
          severity='info'
        >
          {username}
        </Alert>
      )
    }
  }

  return (
    <Container maxWidth='xs' className={classes.root}>
      <div className={classes.main}>
        <Typography variant='h6' align='center' className={classes.header}>
          Hello user how can we help you?
        </Typography>

        <div className={classes.paper}>
          <Button
            onClick={handleForgotUsername}
            startIcon={<AccountCircleIcon />}
            className={classes.button}
            variant='outlined'
            color='secondary'
            fullWidth
          >
            I have forgot my username
          </Button>

          <Button
            onClick={handleForgotPassword}
            startIcon={<LockOpenIcon />}
            className={classes.button}
            variant='outlined'
            color='secondary'
            fullWidth
          >
            I have forgot my password
          </Button>
        </div>

        <footer className={classes.footer}>
          <Link
            className={classes.link}
            to='/login'
            variant='body2'
            style={{ marginLeft: '15px' }}
          >
            Back to login
          </Link>
        </footer>
      </div>

      <ForgotUsername
        handleCloseForgotUsername={handleCloseForgotUsername}
        forgotUsername={forgotUsername}
        width={width}
        classes={classes}
        values={values}
        handleChange={handleChange}
        fetchUsername={fetchUsername}
        displayUsername={displayUsername}
        displayUsernameError={displayUsernameError}
      />

      <ForgotPassword
        width={width}
        classes={classes}
        forgotPassword={forgotPassword}
        handleCloseForgotPassword={handleCloseForgotPassword}
      />
    </Container>
  )
}

export default CannotLogin
