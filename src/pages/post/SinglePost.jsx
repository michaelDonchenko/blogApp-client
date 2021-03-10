import { Container, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getPost } from '../../controllers/postControllers'
import styles from './styles'
import Loader from '../../components/utils/Loader'
import parse from 'html-react-parser'
import { Alert } from '@material-ui/lab'
import AuthorSection from './AuthorSection'

const SinglePost = ({ match }) => {
  const classes = styles()
  const id = match.params.id

  const [values, setValues] = useState({
    title: '',
    body: '',
    postedBy: '',
    error: false,
    loading: true,
    success: false,
  })

  const { title, body, error, loading, postedBy } = values
  const [width, setWidth] = useState(window.innerWidth)

  const handleWithChange = () => {
    setWidth(window.innerWidth)
  }

  const fetchPost = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await getPost(id)

      if (data.success === true) {
        return setValues({
          ...values,
          loading: false,
          error: false,
          title: data.post.title,
          body: data.post.body,
          postedBy: data.post.postedBy,
        })
      }
    } catch (error) {
      return setValues({
        ...values,
        success: false,
        error: 'An error accoured',
        loading: false,
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
    fetchPost()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWithChange)
    return () => window.removeEventListener('resize', handleWithChange)
  }, [])

  return (
    <Container maxWidth='lg' className={classes.root}>
      {displayError()}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Typography component='div' className={classes.main}>
            <Typography
              className={classes.header}
              variant={width < 600 ? 'h6' : 'h4'}
            >
              {title && title}
            </Typography>

            <div className={classes.body}>
              <Typography variant='body1'>{body && parse(body)}</Typography>
            </div>

            <hr className={classes.hr}></hr>

            <AuthorSection
              postedBy={postedBy}
              classes={classes}
              width={width}
            />

            <hr className={classes.hr}></hr>
          </Typography>
        </>
      )}
    </Container>
  )
}

export default SinglePost
