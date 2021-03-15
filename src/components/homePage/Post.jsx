import { Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { pink } from '@material-ui/core/colors'
import { AuthContext } from '../../context/authContext'
import DeleteDialog from '../utils/DeleteDialog'
import { deletePost } from '../../controllers/postControllers'
import { Alert } from '@material-ui/lab'
import { getPosts } from '../../controllers/postControllers'
import ActionButtons from '../utils/ActionButtons'

const Post = ({ post, classes, width, values, setValues }) => {
  const { state } = useContext(AuthContext)
  const { user, token } = state
  const { deleteError } = values

  const [postId, setPostId] = useState(false)

  const handleClickOpen = () => {
    setPostId(post._id)
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
        const { data } = await getPosts()
        setValues({
          ...values,
          deleteError: false,
          posts: data.posts,
          deleteLoading: false,
          pages: data.pages,
          setPostId: false,
        })
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

  const displayError = () => {
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

  return (
    <>
      <Typography component='div' className={classes.post}>
        <Link className={classes.link} to={`/post/${post._id}`}>
          <Typography
            style={{
              marginBottom: '7px',
              textAlign: 'center',
              color: pink[500],
              background: pink[50],
            }}
            variant={width > 600 ? 'h5' : 'h6'}
          >
            {post.title}
          </Typography>
        </Link>

        <Typography style={{ margin: '20px 0' }} variant='body1'>
          {post.body.length >= 800
            ? parse(post.body.substring(0, 800) + '[...]')
            : parse(post.body.substring(0, 800))}
        </Typography>

        <Typography className={classes.flexDiv} component='div' align='left'>
          <div>
            <img
              className={classes.image}
              src={post.postedBy.images[0].url}
              alt='Could not display image'
            />
          </div>

          <div>
            <Link
              style={{ display: 'flex', width: 'fit-content' }}
              className={classes.link}
              to={`/public-user/${post.postedBy.username}`}
            >
              <Typography
                variant='subtitle1'
                style={{ overflowX: 'auto', fontWeight: '600' }}
              >
                {post.postedBy.username} /
                <span style={{ color: 'GrayText' }}>{post.postedBy.email}</span>
              </Typography>
            </Link>

            <Typography variant='body2' style={{ color: 'GrayText' }}>
              {moment(post.createdAt).format('MMM Do YYYY')}
            </Typography>

            <Typography variant='body2' style={{ color: 'black' }}>
              Views: {post.views}
            </Typography>
          </div>
        </Typography>

        <hr className={classes.hr}></hr>

        <ActionButtons
          classes={classes}
          user={user}
          post={post}
          handleClickOpen={handleClickOpen}
        />
      </Typography>

      <DeleteDialog
        displayError={displayError}
        postId={postId}
        handleClose={handleClose}
        post={post}
        handleDelete={handleDelete}
        values={values}
      />
    </>
  )
}

export default Post
