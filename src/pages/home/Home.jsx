import React from 'react'
import { Container, Typography } from '@material-ui/core'
import useStyles from './styles'

const Home = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography component='Typography' className={classes.main}>
        <Typography variant='h4' align='center' className={classes.header}>
          Recent Blogs
        </Typography>
      </Typography>
    </Container>
  )
}

export default Home
