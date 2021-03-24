import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { getUserPosts } from '../../controllers/postControllers'
import styles from './styles'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Paginate from '../../components/utils/Paginate'
import Loader from '../../components/utils/Loader'
import { Alert } from '@material-ui/lab'

const UserPosts = () => {
  const classes = styles()
  const { state } = useContext(AuthContext)
  const { user } = state

  const [values, setValues] = useState({
    loading: true,
    error: false,
    page: '',
    pages: '',
    posts: [],
  })

  const limit = 8
  const { loading, error, page, pages, posts } = values

  const fetchUserPosts = async () => {
    setValues({ ...values, loading: true })
    try {
      const { data } = await getUserPosts(user._id, page, limit)
      setValues({
        ...values,
        posts: data.posts,
        loading: false,
        pages: data.pages,
      })
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
    fetchUserPosts()
  }, [page])

  const displayError = () => {
    if (error) {
      return (
        <Alert style={{ margin: '20px' }} variant='outlined' severity='error'>
          {error}
        </Alert>
      )
    }
  }

  return (
    <Container maxWidth='lg' className={classes.root}>
      <div className={classes.main}>
        <Typography className={classes.heading} variant='h5' align='center'>
          {user && `${user.username}'s Posts`}
        </Typography>

        {displayError()}

        {loading ? (
          <Loader />
        ) : (
          <TableContainer component={Paper} style={{ padding: '10px 0' }}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left'>Created At</TableCell>
                  <TableCell align='left'>Title</TableCell>
                  <TableCell align='left'>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts && posts.length > 0 ? (
                  posts.map((post) => (
                    <TableRow key={post._id}>
                      <TableCell align='left'>
                        {moment(post.createdAt).format('MM Do YYYY')}
                      </TableCell>

                      <TableCell align='left'>
                        <Tooltip title={post.title}>
                          <Link
                            className={classes.link}
                            to={`/post/${post._id}`}
                          >
                            {post.title.length >= 20
                              ? post.title.substring(0, 20) + '...'
                              : post.title}
                          </Link>
                        </Tooltip>
                      </TableCell>

                      <TableCell align='left'>
                        {post.status === 'not confirmed'
                          ? 'Pending confirmation'
                          : post.status}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell>No posts found...</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <Paginate
              page={page}
              pages={pages}
              handlePageChange={handlePageChange}
            />
          </TableContainer>
        )}
      </div>
    </Container>
  )
}

export default UserPosts
