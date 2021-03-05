import { Container, Grid, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import LeftGrid from '../../components/userProfile/LeftGrid'
import styles from './styles'
import { userProfile } from '../../controllers/userControllers'
import { AuthContext } from '../../context/authContext'

const UserProfile = () => {
  const classes = styles()
  const { state } = useContext(AuthContext)
  const { user, token } = state

  const [values, setValues] = useState({
    username: '',
    email: '',
    images: [],
    about: '',
    error: false,
    loading: false,
  })

  const getUserProfile = async (req, res) => {
    try {
      const userProfileResponse = await userProfile(token)
      console.log(userProfileResponse)
    } catch (error) {
      console.log(error)
      setValues({
        ...values,
        loading: false,
        error: error.response.data.message,
      })
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  return (
    <Container maxWidth='lg' className={classes.root}>
      <div className={classes.main}>
        <Typography className={classes.heading} variant='h4' align='center'>
          User Profile
        </Typography>
        <Grid container>
          <LeftGrid />

          <Grid item item xs={12} md={6}>
            <p>right grid</p>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default UserProfile
