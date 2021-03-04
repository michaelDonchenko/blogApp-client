import React from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import { Grid, Typography } from '@material-ui/core'

const HomeFilters = ({ classes, keyword, setKeyword }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography component='div' align='center'>
            <SearchBar keyword={keyword} setKeyword={setKeyword} />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography align='center' variant='h6'>
            Here will be filtering options
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography align='center' variant='h6'>
            Here will be filtering options
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomeFilters
