import { Container, Grid, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { publicProfile } from '../../controllers/userControllers'
import styles from './styles'
import Loader from '../../components/utils/Loader'
import LeftGrid from './LeftGrid'
import RightGrid from './RightGrid'

const PublicProfile = ({ match }) => {
  const classes = styles()
  const username = match.params.username

  const [values, setValues] = useState({
    profile: '',
    loading: true,
    error: false,
    page: '',
    pages: '',
    posts: [],
    postsError: false,
    postsLoading: false,
  })

  const { profile, error, loading } = values

  const getProfile = async () => {
    try {
      const { data } = await publicProfile(username)
      if (data.success) {
        setValues({ ...values, loading: false, profile: data.user })
      }
    } catch (error) {
      setValues({
        ...values,
        loading: false,
        error: error.response.data.message,
      })
    }
  }

  const displayError = () => {
    if (error) {
      return (
        <Alert
          style={{ margin: '15px', width: '100%' }}
          variant='outlined'
          severity='error'
        >
          {error}
        </Alert>
      )
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <Container maxWidth='lg' className={classes.root}>
      <div className={classes.main}>
        <Typography className={classes.heading} variant='h4' align='center'>
          Public Profile
        </Typography>
        {displayError()}

        {loading ? (
          <Loader />
        ) : (
          <Grid container>
            <LeftGrid profile={profile} />
            <RightGrid
              profile={profile}
              values={values}
              setValues={setValues}
            />
          </Grid>
        )}
      </div>
    </Container>
  )
}

export default PublicProfile
