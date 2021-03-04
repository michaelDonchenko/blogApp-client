import React, { useState, useContext, useEffect } from 'react'
import { Container, Typography } from '@material-ui/core'
import useStyles from './styles'
import HomeFilters from '../../components/homePage/HomeFilters'
import { getPosts } from '../../controllers/postControllers'
import PostsContainer from '../../components/homePage/PostsContainer'
import Paginate from '../../components/utils/Paginate'
import Welcome from '../../components/homePage/Welcome'

const Home = () => {
  const classes = useStyles()
  const [keyword, setKeyword] = useState('')

  const [values, setValues] = useState({
    loading: false,
    error: false,
    posts: '',
    pages: '',
    page: null,
  })

  const { loading, error, posts, pages, page } = values

  const getAllPosts = async () => {
    setValues({ ...values, loading: true })
    try {
      const getPostsResponse = await getPosts(page)

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
    getAllPosts()
  }, [page])

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography component='div' className={classes.main}>
        <header>
          <Welcome />
          <HomeFilters
            classes={classes}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        </header>

        <main>
          <PostsContainer posts={posts} error={error} loading={loading} />
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

export default Home
