import { Container, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import style from './styles'
import { getUsers } from '../../../controllers/userControllers'
import Paginate from '../../../components/utils/Paginate'
import Loader from '../../../components/utils/Loader'
import UserDiv from './UserDiv'

const BanUsers = () => {
  const classes = style()
  const [values, setValues] = useState({
    users: [],
    page: null,
    pages: '',
    loadingUsers: false,
    usersError: false,
  })

  const { pages, page, users, loadingUsers } = values

  const fetchUsers = async () => {
    setValues({ ...values, loadingUsers: true })
    try {
      const { data } = await getUsers(page)

      setValues({
        ...values,
        loadingUsers: false,
        users: data.users,
        pages: data.pages,
        error: false,
      })
    } catch (error) {
      setValues({
        ...values,
        loadingUsers: false,
        error: error.response.data.error,
      })
    }
  }

  const handlePageChange = (event, value) => {
    setValues({ ...values, page: value })
  }

  useEffect(() => {
    fetchUsers()
  }, [page])

  return (
    <Container component='div' maxWidth='md' className={classes.root}>
      <Typography component='div' className={classes.main}>
        <Typography variant='h5' align='center' className={classes.header}>
          Users list
        </Typography>

        {loadingUsers ? (
          <Loader />
        ) : users && users.length > 0 ? (
          <div>
            {users.map((user) => (
              <UserDiv user={user} classes={classes} />
            ))}
          </div>
        ) : (
          <p>No users found...</p>
        )}
        <Paginate
          page={page}
          pages={pages}
          handlePageChange={handlePageChange}
        />
      </Typography>
    </Container>
  )
}

export default BanUsers
