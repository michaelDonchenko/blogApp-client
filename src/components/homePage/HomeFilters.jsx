import React, { useState } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import { Button, Grid, Typography } from '@material-ui/core'
import DisplayUsers from '../utils/DisplayUsers'
import { getUsers } from '../../controllers/userControllers'

const HomeFilters = ({ keyword, setKeyword, search, classes, width }) => {
  const [displayUsers, setDisplayUsers] = useState(false)

  const handleDispayUsers = () => {
    setDisplayUsers(true)
  }

  const handleClose = () => {
    setDisplayUsers(false)
  }

  const [values, setValues] = useState({
    users: [],
    page: null,
    pages: '',
    loadingUsers: false,
    usersError: false,
  })

  const { page } = values

  const fetchUsers = async (req, res) => {
    setValues({ ...values, loadingUsers: true })
    try {
      const { data } = await getUsers(page)

      setValues({
        ...values,
        loading: false,
        users: data.users,
        pages: data.pages,
        error: false,
      })
    } catch (error) {
      setValues({ ...values, loading: false, error: error.response.data.error })
    }
  }

  const handlePageChange = (event, value) => {
    setValues({ ...values, page: value })
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography component='div' align='center'>
            <SearchBar
              keyword={keyword}
              setKeyword={setKeyword}
              search={search}
            />
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography align='center' variant='h6'>
            Here will be filtering options
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div className={classes.flexDiv2}>
            <Button
              className={classes.button}
              onClick={handleDispayUsers}
              variant='outlined'
              color='secondary'
            >
              Display users
            </Button>
          </div>
        </Grid>
      </Grid>

      <DisplayUsers
        width={width}
        displayUsers={displayUsers}
        handleClose={handleClose}
        classes={classes}
        values={values}
        setValues={setValues}
        fetchUsers={fetchUsers}
        handlePageChange={handlePageChange}
      />
    </div>
  )
}

export default HomeFilters
