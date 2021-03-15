import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const AuthorSection = ({ postedBy, classes, width, createdAt, post }) => {
  const { images, username, email } = postedBy

  return (
    <div className={classes.flexDiv}>
      <div>
        <img
          className={classes.image}
          src={images[0].url}
          alt='could not show the image'
        />
      </div>

      <div>
        <Link
          style={{ display: 'flex', width: 'fit-content' }}
          className={classes.link}
          to={`/public-user/${username}`}
        >
          <Typography
            variant={width > 600 ? 'h5' : 'subtitle1'}
            style={{ overflowX: 'auto', fontWeight: '600', marginLeft: '15px' }}
          >
            {username} /<span style={{ color: 'GrayText' }}>{email}</span>
          </Typography>
        </Link>

        <Typography
          variant='subtitle1'
          style={{
            overflowX: 'auto',
            fontWeight: '600',
            marginLeft: '15px',
            color: 'GrayText',
          }}
        >
          {moment(createdAt).format('MMM Do YYYY')}
        </Typography>

        <Typography
          variant='subtitle1'
          style={{
            overflowX: 'auto',
            marginLeft: '15px',
            color: 'black',
          }}
        >
          Views: {post.views}
        </Typography>
      </div>
    </div>
  )
}

export default AuthorSection
