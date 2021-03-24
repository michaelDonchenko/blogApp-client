import { Typography } from '@material-ui/core'
import React from 'react'
import banned from '../../images/banned.jpg'

const AuthorizationError = () => {
  return (
    <Typography component='div'>
      <Typography
        variant='h4'
        align='center'
        style={{
          marginTop: '50px',
          backgroundColor: 'black',
          color: 'white',
          padding: '5px',
        }}
      >
        We're sorry this user was banned!
      </Typography>

      <img src={banned} style={{ maxWidth: '100%' }} />
    </Typography>
  )
}

export default AuthorizationError
