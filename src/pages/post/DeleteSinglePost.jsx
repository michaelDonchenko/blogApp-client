import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core'
import React from 'react'
import styles from './styles'
import Loader from '../../components/utils/Loader'
import { pink } from '@material-ui/core/colors'

const DeleteSinglePost = ({
  post,
  values,
  displayDeleteError,
  postId,
  handleClose,
  handleDelete,
}) => {
  const classes = styles()
  const { deleteLoading } = values

  return (
    <Dialog
      open={postId === post._id}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <div>
        <DialogContent className={classes.deleteDialog}>
          {displayDeleteError()}

          <DialogContentText id='alert-dialog-description'>
            <h4 style={{ color: pink[500] }}>
              Are you sure you want to delete this blog?
            </h4>
            <h3>Title: {post.title}</h3>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          {deleteLoading ? (
            <Loader />
          ) : (
            <>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleDelete} color='primary' autoFocus>
                Agree
              </Button>
            </>
          )}
        </DialogActions>
      </div>
    </Dialog>
  )
}

export default DeleteSinglePost
