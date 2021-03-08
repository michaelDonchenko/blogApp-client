import { Button, Grid } from '@material-ui/core'
import React from 'react'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined'
import Loader from '../utils/Loader'
import UserImages from './UserImages'
import { Alert } from '@material-ui/lab'

const LeftGrid = ({
  values,
  classes,
  handleImageChange,
  handleImageUpload,
  setValues,
}) => {
  const { images, loading, error } = values

  const showError = () => {
    if (error) {
      return (
        <Alert
          style={{ width: 'fit-content', margin: '20px' }}
          variant='outlined'
          severity='error'
        >
          {error}
        </Alert>
      )
    }
  }

  return (
    <Grid item xs={12} md={6}>
      <div className={classes.flexDiv}>
        {loading ? (
          <Loader />
        ) : (
          <img
            className={classes.image}
            src={images.length > 0 && images[0].url}
            alt='Cannot show this image'
          />
        )}

        <form onSubmit={handleImageUpload}>
          <input
            style={{
              fontSize: '15px',
              display: 'flex',
              padding: '10px 20px',
            }}
            type='file'
            accept='image/*'
            name='imagetoUpload'
            onChange={handleImageChange}
          />

          {loading ? (
            <Loader />
          ) : (
            <Button
              style={{
                fontSize: '15px',
                display: 'flex',
                margin: '5px 20px',
              }}
              startIcon={<CameraAltOutlinedIcon />}
              variant='contained'
              className={classes.button}
              type='submit'
              color='primary'
            >
              Upload Image
            </Button>
          )}
        </form>

        {showError()}

        <UserImages values={values} classes={classes} setValues={setValues} />
      </div>
    </Grid>
  )
}

export default LeftGrid
