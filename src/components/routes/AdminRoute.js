import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const AdminRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AuthContext)
  const { user, token } = state

  return (
    <Route
      {...rest}
      render={(props) =>
        !user || !token || user.role !== 'admin' ? (
          <Redirect to='/Authorization-error' />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default AdminRoute
