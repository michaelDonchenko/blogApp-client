import React, { useState, useContext, useEffect } from 'react'
import { Container, Typography } from '@material-ui/core'
import useStyles from './styles'
import HomeFilters from '../../components/homePage/HomeFilters'
import { getPosts, searchQuery } from '../../controllers/postControllers'
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
    queryPages: '',
    queryPage: null,
    deleteError: false,
    deleteLoading: false,
  })

  const { loading, error, posts, pages, page, queryPage, queryPages } = values

  const [width, setWidth] = useState(window.innerWidth)

  const handleWithChange = () => {
    setWidth(window.innerWidth)
  }

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
          queryPage: null,
          queryPages: '',
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

  const search = async () => {
    setValues({ ...values, loading: true })
    try {
      if (!keyword) {
        return await getAllPosts()
      }
      const { data } = await searchQuery(keyword, queryPage)
      if (data.success === true) {
        setValues({
          ...values,
          error: false,
          posts: data.posts,
          loading: false,
          queryPages: data.pages,
          page: null,
          pages: '',
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

  const handleQueryPageChange = (event, value) => {
    setValues({ ...values, queryPage: value })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!keyword) {
      return getAllPosts()
    }
  }, [page])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (keyword) {
      return search()
    }
  }, [queryPage])

  useEffect(() => {
    window.addEventListener('resize', handleWithChange)
    return () => window.removeEventListener('resize', handleWithChange)
  }, [])

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography component='div' className={classes.main}>
        <header>
          <Welcome width={width} />
          <HomeFilters
            search={search}
            classes={classes}
            keyword={keyword}
            setKeyword={setKeyword}
            width={width}
          />
        </header>

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
          {!keyword && (
            <Paginate
              page={page}
              pages={pages}
              handlePageChange={handlePageChange}
            />
          )}

          {keyword && (
            <Paginate
              page={queryPage}
              pages={queryPages}
              handlePageChange={handleQueryPageChange}
            />
          )}
        </footer>
      </Typography>
    </Container>
  )
}

export default Home
