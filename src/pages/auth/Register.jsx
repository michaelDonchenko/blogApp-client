import React, { useState, useContext } from 'react'
import Container from '@material-ui/core/Container'
import styles from './styles'
import RegisterForm from '../../components/auth/registerForm'
import { register } from '../../controllers/authControllers'
import { AuthContext } from '../../context/authContext'

const Register = ({ history }) => {
  const { state } = useContext(AuthContext)
  const { user, token } = state

  if (user && token) {
    history.push('/')
  }

  const classes = styles()
  const [values, setValues] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    loading: false,
    error: false,
    success: false,
  })

  const { name, username, password, email } = values

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValues({ ...values, loading: true })
    try {
      const registerResponse = await register(name, password, email, username)

      if (registerResponse.data.errors) {
        let errors = []
        registerResponse.data.errors.map((err) => errors.push(err.msg))
        return setValues({
          ...values,
          error: errors,
          loading: false,
          success: false,
        })
      }

      if (registerResponse.data.success === true) {
        return setValues({
          ...values,
          error: false,
          loading: false,
          success: registerResponse.data.message,
          name: '',
          username: '',
          password: '',
          email: '',
        })
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
    <>
      <Container maxWidth='xs' className={classes.root}>
        <RegisterForm
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Container>
    </>
  )
}

export default Register
