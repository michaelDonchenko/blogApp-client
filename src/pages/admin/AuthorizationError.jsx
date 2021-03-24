import { Typography } from '@material-ui/core'
import React from 'react'

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
        We're sorry this is admin resourse only!
      </Typography>
    </Typography>
  )
}

export default AuthorizationError
