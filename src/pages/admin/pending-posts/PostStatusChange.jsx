import React, { useState, useContext } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import styles from './styles'
import { Button } from '@material-ui/core'
import { changeStatus } from '../../../controllers/postControllers'
import { AuthContext } from '../../../context/authContext'
import { Alert } from '@material-ui/lab'

const PostStatusChange = ({ post }) => {
  const classes = styles()
  const [select, setSelect] = useState(post.status)

  const { state } = useContext(AuthContext)
  const { token } = state
  const [values, setValues] = useState({
    error: false,
    loading: false,
    message: false,
  })

  const { error, loading, message } = values

  const handleSelect = (e) => {
    setSelect(e.target.value)
  }

  const handleStatusChange = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await changeStatus(token, post._id, select)
      setValues({ ...values, loading: false, message: data.message })
    } catch (error) {
      setValues({
        ...values,
        loading: false,
        error: error.response.data.message,
      })
    }
  }

  const displaySuccess = () => {
    if (message) {
      return (
        <Alert style={{ width: '100%' }} variant='outlined' severity='success'>
          {message}
        </Alert>
      )
    }
  }

  const displayError = () => {
    if (error) {
      return (
        <Alert style={{ width: '100%' }} variant='outlined' severity='error'>
          {error}
        </Alert>
      )
    }
  }

  return (
    <div className={classes.flexDiv}>
      <FormControl className={classes.select}>
        <InputLabel id='status'>Select post status</InputLabel>
        <Select labelId='status' value={select} onChange={handleSelect}>
          <MenuItem value={'not confirmed'}>Not confirmed</MenuItem>
          <MenuItem value={'confirmed'}>Confirmed</MenuItem>
          <MenuItem value={'denied'}>Denied</MenuItem>
        </Select>
      </FormControl>

      {displayError()}
      {displaySuccess()}

      <Button
        onClick={handleStatusChange}
        variant='contained'
        className={classes.button}
        color='primary'
      >
        {loading ? 'Loading' : 'Save'}
      </Button>
    </div>
  )
}

export default PostStatusChange
