import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core'
import React from 'react'
import styles from './style'
import Loader from '../utils/Loader'
import { pink } from '@material-ui/core/colors'

const DeleteDialog = ({
  postId,
  handleClose,
  post,
  handleDelete,
  values,
  displayError,
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
          {displayError()}

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

export default DeleteDialog
