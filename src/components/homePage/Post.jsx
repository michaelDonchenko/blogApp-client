import { Typography } from '@material-ui/core'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Post = ({ post, classes }) => {
  return (
    <>
      <Typography component='div' className={classes.post}>
        <Link className={classes.link} to={`/post/${post._id}`}>
          <Typography
            style={{
              marginBottom: '7px',
              textAlign: 'center',
              fontWeight: '500',
            }}
            variant='h5'
          >
            {post.title}
          </Typography>
        </Link>

        <Typography style={{ margin: '20px 0' }} variant='body1'>
          {post.body.substring(0, 300)}{' '}
          {post.body.length >= 300 ? '[...]' : null}
        </Typography>

        <Typography component='div' align='left'>
          <Link
            style={{ display: 'flex', width: 'fit-content' }}
            className={classes.link}
            to={`/public-user/${post.postedBy.username}`}
          >
            <Typography
              variant='subtitle1'
              style={{ overflowX: 'auto', fontWeight: '600' }}
            >
              {post.postedBy.username} /
              <span style={{ color: 'GrayText' }}>{post.postedBy.email}</span>
            </Typography>
          </Link>

          <Typography variant='body2' style={{ color: 'GrayText' }}>
            {moment(post.createdAt).format('MMM Do YYYY')}
          </Typography>
        </Typography>
      </Typography>

      <hr className={classes.hr}></hr>
    </>
  )
}

export default Post
