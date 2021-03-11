import { Grid, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React, { useEffect } from 'react'
import Paginate from '../../components/utils/Paginate'
import { getUserPosts } from '../../controllers/postControllers'
import styles from './styles'
import Loader from '../../components/utils/Loader'
import moment from 'moment'
import { pink } from '@material-ui/core/colors'
import { Link } from 'react-router-dom'

const RightGrid = ({ profile, values, setValues }) => {
  const classes = styles()
  const { postsLoading, postsError, page, pages, posts } = values

  const fetchUserPosts = async () => {
    setValues({ ...values, postsLoading: true })
    try {
      const { data } = await getUserPosts(profile._id, page)
      setValues({
        ...values,
        posts: data.posts,
        postsLoading: false,
        pages: data.pages,
      })
    } catch (error) {
      setValues({
        ...values,
        postsLoading: false,
        postsError: error.response.data.message,
      })
    }
  }

  const handlePageChange = (event, value) => {
    setValues({ ...values, page: value })
  }

  const displayError = () => {
    if (postsError) {
      return (
        <Alert
          style={{ margin: '15px', width: '100%' }}
          variant='outlined'
          severity='error'
        >
          {postsError}
        </Alert>
      )
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchUserPosts()
  }, [page])

  return (
    <Grid item xs={12} md={6}>
      <Typography
        variant='h6'
        align='center'
        style={{
          color: 'black',
          margin: '20px 0',
          backgroundColor: pink[50],
        }}
      >
        Recent Blogs
      </Typography>
      <hr></hr>

      <div className={classes.flexDiv}>
        {displayError()}
        {postsLoading ? (
          <Loader />
        ) : (
          posts &&
          posts.length > 0 &&
          posts.map((p) => (
            <Link className={classes.link} to={`/post/${p._id}`}>
              <Typography variant='h6' key={p._id}>
                <span style={{ marginRight: '5px' }}>Title: </span>
                {p.title}
              </Typography>
              <Typography variant='body1' style={{ color: 'GrayText' }}>
                Posted: {moment(p.createdAt).fromNow()}
              </Typography>
            </Link>
          ))
        )}
      </div>

      <Paginate page={page} pages={pages} handlePageChange={handlePageChange} />
    </Grid>
  )
}

export default RightGrid
