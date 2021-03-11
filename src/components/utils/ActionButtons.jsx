import { Button, Typography } from '@material-ui/core'
import React from 'react'
import CommentIcon from '@material-ui/icons/Comment'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import UpdateIcon from '@material-ui/icons/Update'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'

const ActionButtons = ({ user, classes, post, handleClickOpen }) => {
  return (
    <div>
      <Typography component='div' className={classes.flexDiv}>
        <Button
          startIcon={<FavoriteBorderIcon />}
          className={classes.button}
          variant='outlined'
          color='primary'
          disabled={!user}
        >
          Like
        </Button>
        <Button
          startIcon={<CommentIcon />}
          className={classes.button}
          variant='outlined'
          color='secondary'
          disabled={!user}
        >
          comment
        </Button>

        {user && user._id === post.postedBy._id ? (
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
