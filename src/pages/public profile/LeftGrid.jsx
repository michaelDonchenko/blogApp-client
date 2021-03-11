import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles'

const LeftGrid = ({ profile }) => {
  const classes = styles()
  return (
    <Grid item xs={12} md={6}>
      <div className={classes.flexDiv}>
        <img
          className={classes.image}
          src={profile.images[0].url}
          alt='Could not display image'
        />

        <Typography variant='h5' align='center' className={classes.textField}>
          {profile.username}
        </Typography>
        <Typography variant='h6' align='center' className={classes.textField}>
          {profile.email}
        </Typography>
        <Typography
          variant='body1'
          align='center'
          className={classes.textField}
        >
          {profile.about}
        </Typography>
      </div>
    </Grid>
  )
}

export default LeftGrid
