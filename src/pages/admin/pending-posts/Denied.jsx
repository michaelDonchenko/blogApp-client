import React, { useState, useEffect, useContext } from 'react'
import { Container, Typography } from '@material-ui/core'
import useStyles from './styles'
import { getDenied } from '../../../controllers/postControllers'
import PostsContainer from './PostsContainer'
import Paginate from '../../../components/utils/Paginate'
import { AuthContext } from '../../../context/authContext'

const Denied = () => {
  const classes = useStyles()
  const { state } = useContext(AuthContext)
  const { token } = state

  const [values, setValues] = useState({
    loading: false,
    error: false,
    posts: '',
    pages: '',
    page: null,
    selected: '',
  })

  const { loading, error, posts, pages, page } = values

  const [width, setWidth] = useState(window.innerWidth)

  const handleWithChange = () => {
    setWidth(window.innerWidth)
  }

  const getAllPosts = async () => {
    setValues({ ...values, loading: true })
    try {
      const getPostsResponse = await getDenied(page, token)

      if (getPostsResponse.data.success === true) {
        setValues({
          ...values,
          error: false,
          posts: getPostsResponse.data.posts,
          loading: false,
          pages: getPostsResponse.data.pages,
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

  const handlePageChange = (event, value) => {
    setValues({ ...values, page: value })
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    return getAllPosts()
  }, [page])

  useEffect(() => {
    window.addEventListener('resize', handleWithChange)
    return () => window.removeEventListener('resize', handleWithChange)
  }, [])

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography component='div' className={classes.main}>
        <Typography variant='h4' align='center' className={classes.header}>
          Denied blogs
        </Typography>
        <main>
          <PostsContainer
            posts={posts}
            error={error}
            loading={loading}
            width={width}
            values={values}
            setValues={setValues}
            getAllPosts={getAllPosts}
          />
        </main>

        <footer>
          <Paginate
            page={page}
            pages={pages}
            handlePageChange={handlePageChange}
          />
        </footer>
      </Typography>
    </Container>
  )
}

export default Denied
