import { Button, Container, TextField, Typography } from '@material-ui/core'
import React, { useState, useContext, useEffect } from 'react'
import styles from './styles'
import { Editor } from '@tinymce/tinymce-react'
import { getPost, updatePost } from '../../controllers/postControllers'
import { AuthContext } from '../../context/authContext'
import { Alert } from '@material-ui/lab'
import Loader from '../../components/utils/Loader'

const UpdatePost = ({ match }) => {
  const classes = styles()
  const [values, setValues] = useState({
    title: '',
    body: '',
    error: false,
    loading: true,
    success: false,
  })

  const { title, body, error, loading, success } = values
  const { state } = useContext(AuthContext)
  const { token } = state
  const id = match.params.id

  const handleEditorChange = (content, editor) => {
    setValues({ ...values, body: content })
  }

  const displayError = () => {
    if (typeof error === 'string') {
      return (
        <Alert style={{ margin: '20px' }} variant='outlined' severity='error'>
          {error}
        </Alert>
      )
    }

    if (typeof error === 'object') {
      return (
        <Alert style={{ margin: '20px' }} variant='outlined' severity='error'>
          <ul>
            {error.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </Alert>
      )
    }
  }

  const displaySuccess = () => {
    if (success) {
      return (
        <Alert style={{ margin: '20px' }} variant='outlined' severity='success'>
          {success}
        </Alert>
      )
    }
  }

  const fetchPost = async () => {
    try {
      const { data } = await getPost(id)

      if (data.success === true) {
        return setValues({
          ...values,
          loading: false,
          error: false,
          title: data.post.title,
          body: data.post.body,
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValues({ ...values, loading: true })
    try {
      const { data } = await updatePost(token, id, title, body)

      if (data.errors) {
        let errors = []
        data.errors.map((err) => errors.push(err.msg))
        return setValues({
          ...values,
          error: errors,
          loading: false,
          success: false,
        })
      }

      if (data.success) {
        setValues({
          ...values,
          title: '',
          body: '',
          error: false,
          success: data.message,
          loading: false,
        })
      }
    } catch (error) {
      console.log(error)
      setValues({
        ...values,
        success: false,
        error: 'An error accoured',
        loading: false,
      })
    }
  }

  useEffect(() => {
    setTimeout(() => fetchPost(), 2000)
  }, [])

  return (
    <Container maxWidth='lg' className={classes.root}>
      <div className={classes.main}>
        <Typography className={classes.heading} variant='h5' align='center'>
          Update Blog
        </Typography>
        <Typography component='div' align='center'>
          <form onSubmit={handleSubmit}>
            {displayError()}
            {displaySuccess()}
            <TextField
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              value={title}
              className={classes.inputField}
              name='username'
              label='Enter the blog title'
              type='text'
            />

            <div className={classes.editorDiv}>
              <Editor
                apiKey='2q2bdjlqnx7i6d0lbkldb695k5mgi3j1j7wfsx4y5prpnd4s'
                value={body}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
                }}
                onEditorChange={handleEditorChange}
              />
            </div>
            {loading ? (
              <Loader />
            ) : (
              <Button color='primary' variant='contained' type='submit'>
                Update Blog
              </Button>
            )}
          </form>
        </Typography>
      </div>
    </Container>
  )
}

export default UpdatePost
