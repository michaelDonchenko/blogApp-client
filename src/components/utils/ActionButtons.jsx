import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CommentIcon from '@material-ui/icons/Comment'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import UpdateIcon from '@material-ui/icons/Update'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'
import { likePost, unlikePost } from '../../controllers/postControllers'

const ActionButtons = ({ user, classes, post, handleClickOpen, token }) => {
  const [values, setValues] = useState({
    like: user ? post.likes.includes(user._id) : false,
    loading: false,
    error: false,
    likesCount: post.likes.length,
  })

  const { like, loading, error, likesCount } = values

  const handleLike = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await likePost(post._id, token)
      if (data.success) {
        setValues({
          ...values,
          loading: false,
          error: false,
          like: !like,
          likesCount: likesCount + 1,
        })
      }
    } catch (error) {
      setValues({
        ...values,
        loading: false,
        error: error.response.data.message,
      })
    }
  }

  const handleUnLike = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await unlikePost(post._id, token)
      if (data.success) {
        setValues({
          ...values,
          loading: false,
          error: false,
          like: !like,
          likesCount: likesCount - 1,
        })
      }
    } catch (error) {
      setValues({
        ...values,
        loading: false,
        error: error.response.data.message,
      })
    }
  }

  return (
    <div>
      <Typography component='div' className={classes.flexDiv}>
        {error ? (
          <span>We're sorry there is an error...</span>
        ) : like ? (
          <Button
            onClick={() => handleUnLike()}
            startIcon={<FavoriteBorderIcon />}
            className={classes.button}
            variant='contained'
            color='primary'
            disabled={!user}
          >
            {loading ? 'Loading..' : 'Unlike / ' + likesCount}
          </Button>
        ) : (
          <Button
            onClick={() => handleLike()}
            startIcon={<FavoriteBorderIcon />}
            className={classes.button}
            variant='outlined'
            color='primary'
            disabled={!user}
          >
            {loading ? 'Loading..' : 'Like / ' + likesCount}
          </Button>
        )}

        <Button
          startIcon={<CommentIcon />}
          className={classes.button}
          variant='outlined'
          color='secondary'
          disabled={!user}
        >
          comment
        </Button>

        {(user && user._id === post.postedBy._id) ||
        (user && user.role === 'admin') ? (
          <>
            <Link
              className={classes.buttonLink}
              to={`/post-update/${post._id}`}
            >
              <Button
                startIcon={<UpdateIcon />}
                className={classes.updateButton}
                variant='outlined'
              >
                update
              </Button>
            </Link>

            <Button
              startIcon={<DeleteIcon />}
              className={classes.deleteButton}
              variant='outlined'
              onClick={handleClickOpen}
            >
              delete
            </Button>
          </>
        ) : null}
      </Typography>
    </div>
  )
}

export default ActionButtons
