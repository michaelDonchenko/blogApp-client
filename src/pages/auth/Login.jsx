import React, { useContext, useState } from 'react'
import useStyles from './styles'
import Container from '@material-ui/core/Container'
import LoginForm from '../../components/auth/LoginForm'
import { login } from '../../controllers/authControllers'
import { AuthContext } from '../../context/authContext'

const Login = ({ history }) => {
  const { dispatch, state } = useContext(AuthContext)
  const { user, token } = state

  if (user && token) {
    history.push('/')
  }

  const classes = useStyles()
  const [values, setValues] = useState({
    username: '',
    password: '',
    loading: false,
    error: false,
    success: false,
  })

  const { username, password } = values

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValues({ ...values, loading: true })
    try {
      const loginResponse = await login(username, password)

      if (loginResponse.data.errors) {
        let errors = []
        loginResponse.data.errors.map((err) => errors.push(err.msg))
        return setValues({
          ...values,
          error: errors,
          loading: false,
          success: false,
        })
      }

      if (loginResponse.data.success === true) {
        localStorage.setItem('user', JSON.stringify(loginResponse.data.user))
        localStorage.setItem('token', JSON.stringify(loginResponse.data.token))

        dispatch({
          type: 'LOGIN',
          payload: {
            user: loginResponse.data.user,
            token: loginResponse.data.token,
          },
        })

        history.push('/private-profile')
      }
    } catch (error) {
      setValues({
        ...values,
        loading: false,
        success: false,
        error: error.response.data.message,
      })
    }
  }

  return (
    <Container maxWidth='xs' className={classes.root}>
      <LoginForm
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}

export default Login
