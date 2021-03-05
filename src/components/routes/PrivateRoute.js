import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AuthContext)
  const { user, token } = state

  return (
    <Route
      {...rest}
      render={(props) =>
        !user || !token ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  )
}

export default PrivateRoute
