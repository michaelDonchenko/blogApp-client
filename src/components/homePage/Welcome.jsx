import { Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const Welcome = ({ width }) => {
  const { state } = useContext(AuthContext)
  const { user, token } = state

  return (
    <Typography component='div' align='left'>
      <Typography variant={width < 600 ? 'subtitle1' : 'h5'}>
        {user && token ? (
          <>
            <span>Hello</span>
            <span style={{ fontWeight: '600', margin: '0 7px' }}>
              {user.username},
            </span>
            <span>Welcome back.</span>
          </>
        ) : (
          <>
            <span>Hello Guest, please</span>
            <Link style={{ margin: '0 7px', color: 'black' }} to='/login'>
              log-in
            </Link>
            <span>if you want to post a new blog.</span>
          </>
        )}
      </Typography>
    </Typography>
  )
}

export default Welcome
