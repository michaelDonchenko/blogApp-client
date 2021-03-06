import { Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import Loader from '../utils/Loader'
import Post from './Post'
import styles from '../../pages/home/styles'

const PostsContainer = ({
  posts,
  error,
  loading,
  width,
  values,
  setValues,
  getAllPosts,
}) => {
  const displayError = () => {
    if (error) {
      return (
        <Alert style={{ width: '100%' }} variant='outlined' severity='error'>
          {error}
        </Alert>
      )
    }
  }
  const classes = styles()

  return (
    <div className={classes.postsContainer}>
      <Typography variant='h6' align='center' style={{ color: 'GrayText' }}>
        Resent Blogs
      </Typography>
      <hr className={classes.mainHr}></hr>
      {loading && <Loader />}

      {displayError()}

      {!loading && !error && posts.length > 0 ? (
        posts.map((post) => (
          <Post
            post={post}
            key={post._id}
            classes={classes}
            width={width}
            values={values}
            setValues={setValues}
            getAllPosts={getAllPosts}
          />
        ))
      ) : (
        <p>No posts found..</p>
      )}
    </div>
  )
}

export default PostsContainer
