import { Container, Grid, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import LeftGrid from '../../components/userProfile/LeftGrid'
import styles from './styles'
import { updateDetails, userProfile } from '../../controllers/userControllers'
import { AuthContext } from '../../context/authContext'
import Resizer from 'react-image-file-resizer'
import axios from 'axios'
import ImageMenu from '../../components/userProfile/ImageMenu'
import RightGrid from '../../components/userProfile/RightGrid'

const UserProfile = () => {
  const classes = styles()
  const { state } = useContext(AuthContext)
  const { token, user } = state

  const [values, setValues] = useState({
    username: '',
    email: '',
    images: [],
    about: '',
    error: false,
    rightGridError: false,
    loading: false,
    rightGridLoading: false,
    imageToUpload: '',
    imgPublic_id: '',
    imgMenu: false,
    successUpdate: false,
  })

  const {
    username,
    email,
    about,
    imageToUpload,
    imgPublic_id,
    imgMenu,
  } = values

  const { REACT_APP_SERVER_API } = process.env

  const getUserProfile = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await userProfile(token)

      if (data.success) {
        let { user } = data
        setValues({
          ...values,
          username: user.username,
          email: user.email,
          about: user.about,
          images: user.images,
          loading: false,
          error: false,
        })
      }
    } catch (error) {
      console.log(error)
      setValues({
        ...values,
        loading: false,
        error: error.response.data.message,
      })
    }
  }

  const handleImageChange = (e) => {
    setValues({ ...values, imageToUpload: e.target.files[0] })
  }

  const handleImageUpload = async (e) => {
    e.preventDefault()
    setValues({ ...values, loading: true })

    if (!imageToUpload) {
      return setValues({
        ...values,
        loading: false,
        error: 'Please choose an image to upload',
      })
    }
    try {
      Resizer.imageFileResizer(
        imageToUpload,
        500,
        500,
        'auto',
        100,
        0,
        (uri) => {
          axios
            .post(
              `${REACT_APP_SERVER_API}/uploadImages`,
              { image: uri, email: email },
              {
                headers: {
                  Authorization: token,
                },
              }
            )
            .then(({ data }) =>
              setValues({
                ...values,
                images: data.imagesArray,
                loading: false,
                error: false,
              })
            )
            .catch((err) =>
              setValues({
                ...values,
                error: err.response.data.message,
                loading: false,
              })
            )
        },
        'base64'
      )
    } catch (error) {
      console.log(error)
      setValues({ ...state, error: 'Error accoured' })
    }
  }

  const handleImageDelete = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await axios.post(
        `${REACT_APP_SERVER_API}/removeimage`,
        { imageId: imgPublic_id, email: email },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      setValues({
        ...values,
        images: data.imagesArray,
        error: false,
        loading: false,
        imgMenu: false,
      })
    } catch (error) {
      console.log(error.message)
      setValues({
        ...values,
        error: 'Could not delete the image',
        loading: false,
        imgMenu: false,
      })
    }
  }

  const handleProfileImage = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await axios.post(
        `${REACT_APP_SERVER_API}/setProfileImage`,
        { imageId: imgPublic_id, email: email },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      setValues({
        ...values,
        images: data.imagesArray,
        loading: false,
        imgMenu: false,
      })
    } catch (error) {
      console.log(error.message)
      setValues({
        ...values,
        error: 'Could not set profile image',
        imgMenu: false,
        loading: false,
      })
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleDetailsUpdate = async (e) => {
    e.preventDefault()
    setValues({ ...values, rightGridLoading: true })
    try {
      const response = await updateDetails(user._id, token, username, about)

      if (response.data.errors) {
        let errors = []
        response.data.errors.map((err) => errors.push(err.msg))

        setValues({
          ...values,
          rightGridError: errors,
          rightGridLoading: false,
          successUpdate: false,
        })
      }

      if (response.data.success) {
        setValues({
          ...values,
          rightGridError: false,
          rightGridLoading: false,
          successUpdate: 'Details updated succefully.',
          username: response.data.user.username,
          about: response.data.user.about,
        })
      }
    } catch (error) {
      setValues({
        ...values,
        rightGridLoading: false,
        rightGridError: error.response.data.message,
        successUpdate: false,
      })
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  return (
    <Container maxWidth='lg' className={classes.root}>
      <div className={classes.main}>
        <Typography className={classes.heading} variant='h4' align='center'>
          User Profile
        </Typography>
        <Grid container>
          <LeftGrid
            setValues={setValues}
            values={values}
            classes={classes}
            handleImageChange={handleImageChange}
            handleImageUpload={handleImageUpload}
          />

          <ImageMenu
            values={values}
            setValues={setValues}
            imgMenu={imgMenu}
            handleImageDelete={() => handleImageDelete()}
            handleProfileImage={() => handleProfileImage()}
          />

          <Grid item item xs={12} md={6}>
            <RightGrid
              classes={classes}
              values={values}
              setValues={setValues}
              handleChange={handleChange}
              handleDetailsUpdate={handleDetailsUpdate}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default UserProfile
