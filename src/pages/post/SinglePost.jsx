import { Container, Typography } from '@material-ui/core'
import React, { useEffect, useState, useContext } from 'react'
import { deletePost, getPost } from '../../controllers/postControllers'
import styles from './styles'
import Loader from '../../components/utils/Loader'
import parse from 'html-react-parser'
import { Alert } from '@material-ui/lab'
import AuthorSection from './AuthorSection'
import ActionButtons from '../../components/utils/ActionButtons'
import { AuthContext } from '../../context/authContext'
import DeleteSinglePost from './DeleteSinglePost'

const SinglePost = ({ match, history }) => {
  const classes = styles()
  const id = match.params.id
  const { state } = useContext(AuthContext)
  const { user, token } = state

  const [values, setValues] = useState({
    title: '',
    body: '',
    postedBy: '',
    error: false,
    loading: true,
    success: false,
    deleteLoading: false,
    deleteError: false,
    post: '',
  })

  const { title, body, error, loading, postedBy, post, deleteError } = values
  const [width, setWidth] = useState(window.innerWidth)

  const handleWithChange = () => {
    setWidth(window.innerWidth)
  }

  const [postId, setPostId] = useState(false)

  const handleClickOpen = () => {
    setPostId(post._id)
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
          post: data.post,
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

  const displayDeleteError = () => {
    if (deleteError) {
      return (
        <Alert
          style={{ margin: '15px', width: '100%' }}
          variant='outlined'
          severity='error'
        >
          {deleteError}
        </Alert>
      )
    }
  }

  const handleClose = () => {
    setPostId(false)
    setValues({ ...values, deleteError: false })
  }

  const handleDelete = async () => {
    setValues({ ...values, deleteLoading: true })
    try {
      const res = await deletePost(token, post._id)

      if (res.data.success) {
        history.push('/')
      }
    } catch (error) {
      if (error.response.status === 401) {
        return setValues({
          ...values,
          deleteSuccess: false,
          deleteError: 'You are Unauthorized',
          deleteLoading: false,
        })
      }

      setValues({
        ...values,
        deleteSuccess: false,
        deleteError: error.response.data.message,
        deleteLoading: false,
      })
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
            {post.status === 'Denied' ? (
              <Typography
                align='center'
                style={{ marginTop: '20px' }}
                variant={width < 600 ? 'h6' : 'h4'}
              >
                This post was denied by the admin
              </Typography>
            ) : (
              <>
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

                <div style={{ marginBottom: '15px' }}>
                  <AuthorSection
                    postedBy={postedBy}
                    createdAt={post.createdAt}
                    classes={classes}
                    width={width}
                    post={post}
                  />
                </div>

                <ActionButtons
                  classes={classes}
                  user={user}
                  post={post}
                  token={token}
                  postId={postId}
                  handleClickOpen={handleClickOpen}
                />
              </>
            )}
          </Typography>

          <DeleteSinglePost
            displayDeleteError={displayDeleteError}
            values={values}
            post={post}
            postId={postId}
            handleClose={handleClose}
            handleDelete={handleDelete}
          />
        </>
      )}
    </Container>
  )
}

export default SinglePost
